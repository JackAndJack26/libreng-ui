import Menu from '@/assets/data/menu.json';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, ElementRef, HostListener, inject, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DialogModule } from '@libreng/ui/dialog';
import { InputTextModule } from '@libreng/ui/inputtext';

interface SearchItem {
    label: string;
    group: string;
    routerLink?: string;
    href?: string;
}

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'app-search',
    standalone: true,
    imports: [CommonModule, DialogModule, InputTextModule],
    template: `
        <p-dialog [visible]="visible()" (visibleChange)="visible.set($event)" [modal]="true" [dismissableMask]="true" [showHeader]="false" [style]="{ width: '34rem', marginTop: '6rem' }" position="top" (onShow)="focusInput()">
            <div class="pt-5">
                <input #searchinput pInputText class="w-full" placeholder="Search the docs..." [value]="query()" (input)="query.set($any($event.target).value)" (keydown.enter)="go(results()[0])" (keydown.escape)="close()" />
                <ul class="m-0 mt-3 p-0 list-none max-h-96 overflow-auto">
                    @for (r of results(); track r.group + r.label) {
                        <li>
                            <a class="flex justify-between items-center px-3 py-2 rounded-md cursor-pointer hover:bg-emphasis text-color" (click)="go(r)">
                                <span>{{ r.label }}</span>
                                <span class="text-muted-color text-sm">{{ r.group }}</span>
                            </a>
                        </li>
                    } @empty {
                        @if (query().length > 0) {
                            <li class="px-3 py-2 text-muted-color">No results for "{{ query() }}"</li>
                        }
                    }
                </ul>
            </div>
        </p-dialog>
    `
})
export class AppSearchComponent {
    private router = inject(Router);

    @ViewChild('searchinput') searchInput: ElementRef | undefined;

    visible = signal(false);

    query = signal('');

    private index: SearchItem[] = Menu.data.flatMap((item: any) =>
        item.children
            ? item.children.filter((c: any) => c.routerLink || c.href).map((c: any) => ({ label: c.name, group: item.name, routerLink: c.routerLink, href: c.href }))
            : item.routerLink
              ? [{ label: item.name, group: '', routerLink: item.routerLink }]
              : []
    );

    results = computed(() => {
        const q = this.query().toLowerCase().trim();
        if (!q) return this.index.slice(0, 12);
        return this.index.filter((i) => i.label.toLowerCase().includes(q) || i.group.toLowerCase().includes(q)).slice(0, 15);
    });

    @HostListener('document:keydown', ['$event'])
    onKeydown(event: KeyboardEvent) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            this.open();
        }
    }

    open() {
        this.query.set('');
        this.visible.set(true);
    }

    close() {
        this.visible.set(false);
    }

    focusInput() {
        setTimeout(() => this.searchInput?.nativeElement.focus(), 0);
    }

    go(item: SearchItem | undefined) {
        if (!item) return;
        if (item.routerLink) {
            this.router.navigateByUrl(item.routerLink);
        } else if (item.href) {
            window.open(item.href, '_blank', 'noopener');
        }
        this.close();
    }
}
