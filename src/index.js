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
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { RangeCalendar } from '@/components/ui/range-calendar';
import { Command } from '@/components/ui/command';
import { Combobox } from '@/components/ui/combobox';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectTrigger, SelectContent, SelectGroup, SelectItem, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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
  HForm: Form,
  HFormField: FormField,
  HFormItem: FormItem,
  HFormLabel: FormLabel,
  HFormControl: FormControl,
  HFormDescription: FormDescription,
  HFormMessage: FormMessage,
  HLabel: Label,
  HInput: Input,
  HButton: Button,
  HDatePicker: DatePicker,
  HPopover: Popover,
  HPopoverTrigger: PopoverTrigger,
  HPopoverContent: PopoverContent,
  HCalendar: Calendar,
  HRangeCalendar: RangeCalendar,
  HCommand: Command,
  HCombobox: Combobox,
  HCheckbox: Checkbox,
  HSelect: Select,
  HSelectTrigger: SelectTrigger,
  HSelectContent: SelectContent,
  HSelectGroup: SelectGroup,
  HSelectItem: SelectItem,
  HSelectValue: SelectValue,
  HRadioGroup: RadioGroup,
  HRadioGroupItem: RadioGroupItem,
  HSlider: Slider,
  HTable: Table,
  HTableBody: TableBody,
  HTableCaption: TableCaption,
  HTableCell: TableCell,
  HTableHead: TableHead,
  HTableHeader: TableHeader,
  HTableRow: TableRow
};

const Harmonia = {
  install(app) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};

export default Harmonia;
