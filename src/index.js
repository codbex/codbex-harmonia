import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent } from '@/components/ui/accordion';
import {
  Alert,
  AlertDescription,
  AlertTitle } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Combobox } from '@/components/ui/combobox';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';
import {
  DataTable,
  DataTableColumnHeader,
  DataTablePagination
} from '@/components/ui/data-table';
import { DatePicker } from '@/components/ui/date-picker';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogScrollContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage
} from '@/components/ui/form';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field';
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination';
import {
  PinInput,
  PinInputGroup,
  PinInputInput,
} from '@/components/ui/pin-input';
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@/components/ui/popover';
import { Progress } from '@/components/ui/progress';
import {
  RadioGroup,
  RadioGroupItem
} from '@/components/ui/radio-group';
import { RangeCalendar } from '@/components/ui/range-calendar';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { Slider } from '@/components/ui/slider';
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger
} from '@/components/ui/stepper';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText
} from '@/components/ui/tags-input';
import { Textarea } from '@/components/ui/textarea';

import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  Toaster,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  toast,
  useToast
} from '@/components/ui/toast';
import { Toggle } from '@/components/ui/toggle';
import {
  ToggleGroup,
  ToggleGroupItem
} from '@/components/ui/toggle-group';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Tree } from '@/components/ui/tree';

import './assets/index.css'

const components = {
  HAccordion: Accordion,
  HAccordionItem: AccordionItem,
  HAccordionTrigger: AccordionTrigger,
  HAccordionContent: AccordionContent,
  HAlert: Alert,
  HAlertDescription: AlertDescription,
  HAlertTitle: AlertTitle,
  HAlertDialog: AlertDialog,
  HAlertDialogAction: AlertDialogAction,
  HAlertDialogCancel: AlertDialogCancel,
  HAlertDialogContent: AlertDialogContent,
  HAlertDialogDescription: AlertDialogDescription,
  HAlertDialogFooter: AlertDialogFooter,
  HAlertDialogHeader: AlertDialogHeader,
  HAlertDialogTitle: AlertDialogTitle,
  HAlertDialogTrigger: AlertDialogTrigger,
  HAspectRatio: AspectRatio,
  HAvatar: Avatar,
  HAvatarFallback: AvatarFallback,
  HAvatarImage: AvatarImage,
  HBadge: Badge,
  HBreadcrumb: Breadcrumb,
  HBreadcrumbItem: BreadcrumbItem,
  HBreadcrumbLink: BreadcrumbLink,
  HBreadcrumbList: BreadcrumbList,
  HBreadcrumbPage: BreadcrumbPage,
  HBreadcrumbSeparator: BreadcrumbSeparator,
  HButton: Button,
  HCalendar: Calendar,
  HCard: Card,
  HCardContent: CardContent,
  HCardDescription: CardDescription,
  HCardFooter: CardFooter,
  HCardHeader: CardHeader,
  HCardTitle: CardTitle,
  HCarousel: Carousel,
  HCarouselContent: CarouselContent,
  HCarouselItem: CarouselItem,
  HCarouselNext: CarouselNext,
  HCarouselPrevious: CarouselPrevious,
  HCheckbox: Checkbox,
  HCollapsible: Collapsible,
  HCollapsibleContent: CollapsibleContent,
  HCollapsibleTrigger: CollapsibleTrigger,
  HCombobox: Combobox,
  HCommand: Command,
  HCommandEmpty: CommandEmpty,
  HCommandGroup: CommandGroup,
  HCommandInput: CommandInput,
  HCommandItem: CommandItem,
  HCommandList: CommandList,
  HCommandSeparator: CommandSeparator,
  HCommandShortcut: CommandShortcut,
  HContextMenu: ContextMenu,
  HContextMenuCheckboxItem: ContextMenuCheckboxItem,
  HContextMenuContent: ContextMenuContent,
  HContextMenuItem: ContextMenuItem,
  HContextMenuLabel: ContextMenuLabel,
  HContextMenuRadioGroup: ContextMenuRadioGroup,
  HContextMenuRadioItem: ContextMenuRadioItem,
  HContextMenuSeparator: ContextMenuSeparator,
  HContextMenuShortcut: ContextMenuShortcut,
  HContextMenuSub: ContextMenuSub,
  HContextMenuSubContent: ContextMenuSubContent,
  HContextMenuSubTrigger: ContextMenuSubTrigger,
  HContextMenuTrigger: ContextMenuTrigger,
  HDataTable: DataTable,
  HDataTableColumnHeader: DataTableColumnHeader,
  HDataTablePagination: DataTablePagination,
  HDatePicker: DatePicker,
  HDialog: Dialog,
  HDialogClose: DialogClose,
  HDialogContent: DialogContent,
  HDialogDescription: DialogDescription,
  HDialogFooter: DialogFooter,
  HDialogHeader: DialogHeader,
  HDialogScrollContent: DialogScrollContent,
  HDialogTitle: DialogTitle,
  HDialogTrigger: DialogTrigger,
  HDrawer: Drawer,
  HDrawerClose: DrawerClose,
  HDrawerContent: DrawerContent,
  HDrawerDescription: DrawerDescription,
  HDrawerFooter: DrawerFooter,
  HDrawerHeader: DrawerHeader,
  HDrawerTitle: DrawerTitle,
  HDrawerTrigger: DrawerTrigger,
  HDropdownMenu: DropdownMenu,
  HDropdownMenuCheckboxItem: DropdownMenuCheckboxItem,
  HDropdownMenuContent: DropdownMenuContent,
  HDropdownMenuGroup: DropdownMenuGroup,
  HDropdownMenuItem: DropdownMenuItem,
  HDropdownMenuLabel: DropdownMenuLabel,
  HDropdownMenuRadioGroup: DropdownMenuRadioGroup,
  HDropdownMenuRadioItem: DropdownMenuRadioItem,
  HDropdownMenuSeparator: DropdownMenuSeparator,
  HDropdownMenuShortcut: DropdownMenuShortcut,
  HDropdownMenuSub: DropdownMenuSub,
  HDropdownMenuSubContent: DropdownMenuSubContent,
  HDropdownMenuSubTrigger: DropdownMenuSubTrigger,
  HDropdownMenuTrigger: DropdownMenuTrigger,
  HDropdownMenuPortal: DropdownMenuPortal,
  HForm: Form,
  HFormField: FormField,
  HFormItem: FormItem,
  HFormLabel: FormLabel,
  HFormControl: FormControl,
  HFormDescription: FormDescription,
  HFormMessage: FormMessage,
  HHoverCard: HoverCard,
  HHoverCardContent: HoverCardContent,
  HHoverCardTrigger: HoverCardTrigger,
  HInput: Input,
  HLabel: Label,
  HMenubar: Menubar,
  HMenubarContent: MenubarContent,
  HMenubarItem: MenubarItem,
  HMenubarMenu: MenubarMenu,
  HMenubarSeparator: MenubarSeparator,
  HMenubarShortcut: MenubarShortcut,
  HMenubarTrigger: MenubarTrigger,
  HNavigationMenu: NavigationMenu,
  HNavigationMenuContent: NavigationMenuContent,
  HNavigationMenuItem: NavigationMenuItem,
  HNavigationMenuLink: NavigationMenuLink,
  HNavigationMenuList: NavigationMenuList,
  HNavigationMenuTrigger: NavigationMenuTrigger,
  HNavigationMenuViewport: NavigationMenuViewport,
  HNumberField: NumberField,
  HNumberFieldContent: NumberFieldContent,
  HNumberFieldDecrement: NumberFieldDecrement,
  HNumberFieldIncrement: NumberFieldIncrement,
  HNumberFieldInput: NumberFieldInput,
  HPagination: Pagination,
  HPaginationEllipsis: PaginationEllipsis,
  HPaginationFirst: PaginationFirst,
  HPaginationLast: PaginationLast,
  HPaginationList: PaginationList,
  HPaginationListItem: PaginationListItem,
  HPaginationNext: PaginationNext,
  HPaginationPrev: PaginationPrev,
  HPinInput: PinInput,
  HPinInputGroup: PinInputGroup,
  HPinInputInput: PinInputInput,
  HPopover: Popover,
  HPopoverTrigger: PopoverTrigger,
  HPopoverContent: PopoverContent,
  HProgress: Progress,
  HRadioGroup: RadioGroup,
  HRadioGroupItem: RadioGroupItem,
  HRangeCalendar: RangeCalendar,
  HResizableHandle: ResizableHandle,
  HResizablePanel: ResizablePanel,
  HResizablePanelGroup: ResizablePanelGroup,
  HScrollArea: ScrollArea,
  HSelect: Select,
  HSelectContent: SelectContent,
  HSelectGroup: SelectGroup,
  HSelectItem: SelectItem,
  HSelectItemText: SelectItemText,
  HSelectLabel: SelectLabel,
  HSelectScrollDownButton: SelectScrollDownButton,
  HSelectScrollUpButton: SelectScrollUpButton,
  HSelectSeparator: SelectSeparator,
  HSelectTrigger: SelectTrigger,
  HSelectValue: SelectValue,
  HSeparator: Separator,
  HSheet: Sheet,
  HSheetClose: SheetClose,
  HSheetContent: SheetContent,
  HSheetDescription: SheetDescription,
  HSheetFooter: SheetFooter,
  HSheetHeader: SheetHeader,
  HSheetTitle: SheetTitle,
  HSheetTrigger: SheetTrigger,
  HSkeleton: Skeleton,
  HSlider: Slider,
  HStepper: Stepper,
  HStepperDescription: StepperDescription,
  HStepperIndicator: StepperIndicator,
  HStepperItem: StepperItem,
  HStepperSeparator: StepperSeparator,
  HStepperTitle: StepperTitle,
  HStepperTrigger: StepperTrigger,
  HSwitch: Switch,
  HTable: Table,
  HTableBody: TableBody,
  HTableCaption: TableCaption,
  HTableCell: TableCell,
  HTableHead: TableHead,
  HTableHeader: TableHeader,
  HTableRow: TableRow,
  HTabs: Tabs,
  HTabsContent: TabsContent,
  HTabsList: TabsList,
  HTabsTrigger: TabsTrigger,
  HTagsInput: TagsInput,
  HTagsInputInput: TagsInputInput,
  HTagsInputItem: TagsInputItem,
  HTagsInputItemDelete: TagsInputItemDelete,
  HTagsInputItemText: TagsInputItemText,
  HTextarea: Textarea,
  HToast: Toast,
  HToastAction: ToastAction,
  HToastClose: ToastClose,
  HToastDescription: ToastDescription,
  HToaster: Toaster,
  HToastProvider: ToastProvider,
  HToastTitle: ToastTitle,
  HToastViewport: ToastViewport,
  HToggle: Toggle,
  HToggleGroup: ToggleGroup,
  HToggleGroupItem: ToggleGroupItem,
  HTooltip: Tooltip,
  HTooltipContent: TooltipContent,
  HTooltipProvider: TooltipProvider,
  HTooltipTrigger: TooltipTrigger,
  HTree: Tree
};

const Harmonia = {
  install(app) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};

export default Harmonia;
