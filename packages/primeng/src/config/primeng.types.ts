import type { ElementRef, TemplateRef } from '@angular/core';
import type { OverlayOptions, PassThroughOptions, Translation } from '@libreng/ui/api';
import type { AccordionPassThrough } from '@libreng/ui/types/accordion';
import type { AutoCompletePassThrough } from '@libreng/ui/types/autocomplete';
import type { AvatarPassThrough } from '@libreng/ui/types/avatar';
import type { AvatarGroupPassThrough } from '@libreng/ui/types/avatargroup';
import type { BadgePassThrough } from '@libreng/ui/types/badge';
import type { BlockUIPassThrough } from '@libreng/ui/types/blockui';
import type { BreadcrumbPassThrough } from '@libreng/ui/types/breadcrumb';
import type { ButtonPassThrough } from '@libreng/ui/types/button';
import type { CardPassThrough } from '@libreng/ui/types/card';
import type { CarouselPassThrough } from '@libreng/ui/types/carousel';
import type { CascadeSelectPassThrough } from '@libreng/ui/types/cascadeselect';
import type { CheckboxPassThrough } from '@libreng/ui/types/checkbox';
import type { ChipPassThrough } from '@libreng/ui/types/chip';
import type { ColorPickerPassThrough } from '@libreng/ui/types/colorpicker';
import type { ConfirmDialogPassThrough } from '@libreng/ui/types/confirmdialog';
import type { ConfirmPopupPassThrough } from '@libreng/ui/types/confirmpopup';
import type { DialogPassThrough } from '@libreng/ui/types/dialog';
import type { DividerPassThrough } from '@libreng/ui/types/divider';
import type { DockPassThrough } from '@libreng/ui/types/dock';
import type { DrawerPassThrough } from '@libreng/ui/types/drawer';
import type { EditorPassThrough } from '@libreng/ui/types/editor';
import type { FieldsetPassThrough } from '@libreng/ui/types/fieldset';
import type { FileUploadPassThrough } from '@libreng/ui/types/fileupload';
import type { FloatLabelPassThrough } from '@libreng/ui/types/floatlabel';
import type { FluidPassThrough } from '@libreng/ui/types/fluid';
import type { GalleriaPassThrough } from '@libreng/ui/types/galleria';
import type { IconFieldPassThrough } from '@libreng/ui/types/iconfield';
import type { IftaLabelPassThrough } from '@libreng/ui/types/iftalabel';
import type { ImagePassThrough } from '@libreng/ui/types/image';
import type { ImageComparePassThrough } from '@libreng/ui/types/imagecompare';
import type { InplacePassThrough } from '@libreng/ui/types/inplace';
import type { InputGroupPassThrough } from '@libreng/ui/types/inputgroup';
import type { InputGroupAddonPassThrough } from '@libreng/ui/types/inputgroupaddon';
import type { InputIconPassThrough } from '@libreng/ui/types/inputicon';
import type { InputMaskPassThrough } from '@libreng/ui/types/inputmask';
import type { InputNumberPassThrough } from '@libreng/ui/types/inputnumber';
import type { InputOtpPassThrough } from '@libreng/ui/types/inputotp';
import type { InputTextPassThrough } from '@libreng/ui/types/inputtext';
import type { KnobPassThrough } from '@libreng/ui/types/knob';
import type { MegaMenuPassThrough } from '@libreng/ui/types/megamenu';
import type { MenuPassThrough } from '@libreng/ui/types/menu';
import type { MenubarPassThrough } from '@libreng/ui/types/menubar';
import type { MessagePassThrough } from '@libreng/ui/types/message';
import type { MeterGroupPassThrough } from '@libreng/ui/types/metergroup';
import type { OrderListPassThrough } from '@libreng/ui/types/orderlist';
import type { OrganizationChartPassThrough } from '@libreng/ui/types/organizationchart';
import type { OverlayBadgePassThrough } from '@libreng/ui/types/overlaybadge';
import type { PanelPassThrough } from '@libreng/ui/types/panel';
import type { PanelMenuPassThrough } from '@libreng/ui/types/panelmenu';
import type { PopoverPassThrough } from '@libreng/ui/types/popover';
import type { ProgressBarPassThrough } from '@libreng/ui/types/progressbar';
import type { ProgressSpinnerPassThrough } from '@libreng/ui/types/progressspinner';
import type { RadioButtonPassThrough } from '@libreng/ui/types/radiobutton';
import type { RatingPassThrough } from '@libreng/ui/types/rating';
import type { VirtualScrollerPassThrough } from '@libreng/ui/types/scroller';
import type { ScrollPanelPassThrough } from '@libreng/ui/types/scrollpanel';
import type { ScrollTopPassThrough } from '@libreng/ui/types/scrolltop';
import type { SelectPassThrough } from '@libreng/ui/types/select';
import type { SelectButtonPassThrough } from '@libreng/ui/types/selectbutton';
import type { SkeletonPassThrough } from '@libreng/ui/types/skeleton';
import type { SliderPassThrough } from '@libreng/ui/types/slider';
import type { SpeedDialPassThrough } from '@libreng/ui/types/speeddial';
import type { SplitButtonPassThrough } from '@libreng/ui/types/splitbutton';
import type { SplitterPassThrough } from '@libreng/ui/types/splitter';
import type { StepperPassThrough } from '@libreng/ui/types/stepper';
import type { ColumnFilterPassThrough, TablePassThrough } from '@libreng/ui/types/table';
import type { TabListPassThrough, TabPanelPassThrough, TabPanelsPassThrough, TabPassThrough, TabsPassThrough } from '@libreng/ui/types/tabs';
import type { TagPassThrough } from '@libreng/ui/types/tag';
import type { TerminalPassThrough } from '@libreng/ui/types/terminal';
import type { TieredMenuPassThrough } from '@libreng/ui/types/tieredmenu';
import type { TimelinePassThrough } from '@libreng/ui/types/timeline';
import type { ToastPassThrough } from '@libreng/ui/types/toast';
import type { ToggleButtonPassThrough } from '@libreng/ui/types/togglebutton';
import type { ToggleSwitchPassThrough } from '@libreng/ui/types/toggleswitch';
import type { ToolbarPassThrough } from '@libreng/ui/types/toolbar';
import type { TreePassThrough } from '@libreng/ui/types/tree';
import type { TreeSelectPassThrough } from '@libreng/ui/types/treeselect';
import type { TreeTablePassThrough } from '@libreng/ui/types/treetable';

/** ZIndex configuration */
export type ZIndex = {
    modal: number;
    overlay: number;
    menu: number;
    tooltip: number;
};

/** Theme configuration */
export type ThemeType = { preset?: any; options?: any } | 'none' | boolean | undefined;

export type ThemeConfigType = {
    theme?: ThemeType;
    csp?: {
        nonce: string | undefined;
    };
};

export interface GlobalPassThrough {
    accordion?: AccordionPassThrough;
    autoComplete?: AutoCompletePassThrough;
    avatar?: AvatarPassThrough;
    avatarGroup?: AvatarGroupPassThrough;
    blockUI?: BlockUIPassThrough;
    breadcrumb?: BreadcrumbPassThrough;
    card?: CardPassThrough;
    carousel?: CarouselPassThrough;
    cascadeSelect?: CascadeSelectPassThrough;
    checkbox?: CheckboxPassThrough;
    chip?: ChipPassThrough;
    colorPicker?: ColorPickerPassThrough;
    columnFilter?: ColumnFilterPassThrough;
    confirmDialog?: ConfirmDialogPassThrough;
    confirmPopup?: ConfirmPopupPassThrough;
    dialog?: DialogPassThrough;
    divider?: DividerPassThrough;
    dock?: DockPassThrough;
    megaMenu?: MegaMenuPassThrough;
    drawer?: DrawerPassThrough;
    editor?: EditorPassThrough;
    fileUpload?: FileUploadPassThrough;
    floatLabel?: FloatLabelPassThrough;
    menu?: MenuPassThrough;
    menubar?: MenubarPassThrough;
    fluid?: FluidPassThrough;
    galleria?: GalleriaPassThrough;
    iconField?: IconFieldPassThrough;
    iftaLabel?: IftaLabelPassThrough;
    inputIcon?: InputIconPassThrough;
    image?: ImagePassThrough;
    imageCompare?: ImageComparePassThrough;
    inplace?: InplacePassThrough;
    inputText?: InputTextPassThrough;
    inputGroup?: InputGroupPassThrough;
    inputGroupAddon?: InputGroupAddonPassThrough;
    inputMask?: InputMaskPassThrough;
    inputNumber?: InputNumberPassThrough;
    inputOtp?: InputOtpPassThrough;
    knob?: KnobPassThrough;
    popover?: PopoverPassThrough;
    message?: MessagePassThrough;
    meterGroup?: MeterGroupPassThrough;
    orderList?: OrderListPassThrough;
    organizationChart?: OrganizationChartPassThrough;
    overlayBadge?: OverlayBadgePassThrough;
    progressBar?: ProgressBarPassThrough;
    progressSpinner?: ProgressSpinnerPassThrough;
    radioButton?: RadioButtonPassThrough;
    rating?: RatingPassThrough;
    virtualScroller?: VirtualScrollerPassThrough;
    scrollPanel?: ScrollPanelPassThrough;
    scrollTop?: ScrollTopPassThrough;
    select?: SelectPassThrough;
    selectButton?: SelectButtonPassThrough;
    skeleton?: SkeletonPassThrough;
    slider?: SliderPassThrough;
    speedDial?: SpeedDialPassThrough;
    splitButton?: SplitButtonPassThrough;
    splitter?: SplitterPassThrough;
    stepper?: StepperPassThrough;
    tabs?: TabsPassThrough;
    tab?: TabPassThrough;
    tabList?: TabListPassThrough;
    tabPanel?: TabPanelPassThrough;
    tabPanels?: TabPanelsPassThrough;
    table?: TablePassThrough;
    tieredMenu?: TieredMenuPassThrough;
    timeline?: TimelinePassThrough;
    tag?: TagPassThrough;
    terminal?: TerminalPassThrough;
    toast?: ToastPassThrough;
    toggleButton?: ToggleButtonPassThrough;
    toggleSwitch?: ToggleSwitchPassThrough;
    toolbar?: ToolbarPassThrough;
    tree?: TreePassThrough;
    treeSelect?: TreeSelectPassThrough;
    treeTable?: TreeTablePassThrough;
    panel?: PanelPassThrough;
    panelMenu?: PanelMenuPassThrough;
    button?: ButtonPassThrough;
    badge?: BadgePassThrough;
    fieldset?: FieldsetPassThrough;
    global?: {
        css?: string;
    };
    [key: string]: any;
}

export type PrimeNGConfigType = {
    ripple?: boolean;
    overlayAppendTo?: HTMLElement | ElementRef | TemplateRef<any> | string | null | undefined | any;
    /**
     * @deprecated Since v20. Use `inputVariant` instead.
     */
    inputStyle?: 'outlined' | 'filled';
    inputVariant?: 'outlined' | 'filled';
    overlayOptions?: OverlayOptions;
    translation?: Translation;
    /**
     * @experimental
     * This property is not yet implemented. It will be available in a future release.
     */
    unstyled?: boolean;
    zIndex?: ZIndex | null | undefined;
    pt?: GlobalPassThrough | null | undefined;
    ptOptions?: PassThroughOptions | null | undefined;
    filterMatchModeOptions?: any;
} & ThemeConfigType;
