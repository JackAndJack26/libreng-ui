import { Injectable, signal } from '@angular/core';

/**
 * Minimal local replacement for the former Theme Designer service. The visual
 * designer was a client for PrimeTek's commercial backend (primeui.store) and
 * was removed from this fork; chart demos still observe the preset signal to
 * refresh their colors when a custom preset is applied programmatically.
 */
@Injectable({ providedIn: 'root' })
export class DesignerService {
    preset = signal<any>(null);
}
