import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    changeDetection: ChangeDetectionStrategy.Eager,
    selector: 'footer-section',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
        <section class="landing-footer pt-20 px-8 lg:px-20">
            <div class="landing-footer-container">
                <div class="flex flex-wrap z-10">
                    <div class="w-6/12 lg:w-3/12 flex">
                        <ul class="list-none p-0 m-0">
                            <li class="font-bold mb-8">General</li>
                            <li class="mb-6">
                                <a [routerLink]="['installation']" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300"> Get Started </a>
                            </li>
                            <li class="mb-6">
                                <a href="https://github.com/capivaramu/orbia-ui-examples" target="_blank" rel="noopener noreferrer" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300"
                                    >Examples</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="w-6/12 lg:w-3/12 flex">
                        <ul class="list-none p-0 m-0">
                            <li class="font-bold mb-8">Support</li>
                            <li class="mb-6">
                                <a href="https://github.com/orgs/primefaces/discussions" target="_blank" rel="noopener noreferrer" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300"
                                    >Forum</a
                                >
                            </li>
                            <li class="mb-6">
                                <a href="https://discord.gg/gzKFYnpmCY" target="_blank" rel="noopener noreferrer" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300">Discord</a>
                            </li>
                            <li class="mb-6">
                                <a [routerLink]="['support']" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300">PRO Support </a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-6/12 lg:w-3/12 flex">
                        <ul class="list-none p-0 m-0">
                            <li class="font-bold mt-8 lg:mt-0 mb-8">Theming</li>
                            <li class="mb-6">
                                <a [routerLink]="'/theming'" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300">Styled Mode</a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-6/12 lg:w-3/12 flex">
                        <ul class="list-none p-0 m-0">
                            <li class="font-bold mt-8 lg:mt-0 mb-8">Resources</li>
                            <li class="mb-6">
                                <a
                                    href="https://www.youtube.com/channel/UCTgmp69aBOlLnPEqlUyetWw"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300"
                                    >PrimeTV</a
                                >
                            </li>
                            <li class="mb-6">
                                <a href="https://primeui.store" target="_blank" rel="noopener noreferrer" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300">Store</a>
                            </li>
                            <li class="mb-6">
                                <a href="https://github.com/capivaramu/orbia-ui" target="_blank" rel="noopener noreferrer" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300"
                                    >Source Code</a
                                >
                            </li>
                            <li class="mb-6">
                                <a href="https://twitter.com/prime_ng" target="_blank" rel="noopener noreferrer" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300">Twitter</a>
                            </li>
                            <li class="mb-6">
                                <a href="https://www.primefaces.org/newsletter" target="_blank" rel="noopener noreferrer" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300">Newsletter</a>
                            </li>
                            <li class="mb-6">
                                <a href="https://gear.primefaces.org/" target="_blank" rel="noopener noreferrer" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300">PrimeGear</a>
                            </li>
                            <li class="mb-6">
                                <a href="mailto:contact@primetek.com.tr" target="_blank" rel="noopener noreferrer" class="text-surface-500 dark:text-surface-400 font-medium hover:text-primary rounded transition-all duration-300">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr class="section-divider" />

                <div class="flex flex-wrap justify-between py-12 gap-8">
                    <svg width="150" height="32" viewBox="0 0 150 32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LibreNG UI">
                        <rect x="1" y="3" width="26" height="26" rx="7" fill="var(--p-primary-color)" />
                        <path d="M9 9v14h11v-3.4h-7.2V9H9Z" fill="var(--ground-background)" />
                        <text x="34" y="22.5" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700" fill="var(--high-contrast-text-color)">
                            LibreNG
                            <tspan fill="var(--p-primary-color)">UI</tspan>
                        </text>
                    </svg>
                    <div class="flex items-center gap-2">
                        <a href="https://twitter.com/prime_ng" target="_blank" rel="noopener noreferrer" class="linkbox linkbox-icon">
                            <i class="pi pi-twitter"></i>
                        </a>
                        <a href="https://github.com/capivaramu/orbia-ui" target="_blank" rel="noopener noreferrer" class="linkbox linkbox-icon">
                            <i class="pi pi-github"></i>
                        </a>
                        <a href="https://discord.gg/gzKFYnpmCY" target="_blank" rel="noopener noreferrer" class="linkbox linkbox-icon">
                            <i class="pi pi-discord"></i>
                        </a>
                        <a href="https://github.com/orgs/primefaces/discussions" class="linkbox linkbox-icon">
                            <i class="pi pi-comments"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `
})
export class FooterSectionComponent {}
