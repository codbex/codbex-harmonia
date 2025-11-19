import accordion from './components/accordion';
import button from './components/button';
import input from './components/input';
import card from './components/card';
import label from './components/label';
import textarea from './components/textarea';
import checkbox from './components/checkbox';
import popover from './components/popover';
import avatar from './components/avatar';
import badge from './components/badge';
import select from './components/select';
import alert from './components/alert';
import radio from './components/radio';
import range from './components/range';
import _switch from './components/switch';
import sidebar from './components/sidebar';
import separator from './components/separator';
import skeleton from './components/skeleton';
import collapsible from './components/collapsible';
import tile from './components/tile';
import tag from './components/tag';
import icon from './components/icon';
import infoPage from './components/info-page';
import spinner from './components/spinner';
import fieldset from './components/fieldset';
import tooltip from './components/tooltip';
import progress from './components/progress';
import pagination from './components/pagination';
import tabs from './components/tabs';
import text from './components/text';
import dialog from './components/dialog';
import table from './components/table';
import menu from './components/menu';
import toolbar from './components/toolbar';

import { setColorScheme } from './utils/theme';

export {
  accordion as Accordion,
  alert as Alert,
  avatar as Avatar,
  badge as Badge,
  button as Button,
  card as Card,
  checkbox as Checkbox,
  collapsible as Collapsible,
  dialog as Dialog,
  fieldset as Fieldset,
  icon as Icon,
  infoPage as InfoPage,
  input as Input,
  label as Label,
  menu as Menu,
  pagination as Pagination,
  popover as Popover,
  progress as Progress,
  radio as Radio,
  range as Range,
  select as Select,
  separator as Separator,
  sidebar as Sidebar,
  skeleton as Skeleton,
  spinner as Spinner,
  _switch as Switch,
  table as Table,
  tabs as Tabs,
  tag as Tag,
  textarea as Textarea,
  text as Text,
  tile as Tile,
  toolbar as Toolbar,
  tooltip as Tooltip,
};

const Harmonia = {
  init(registerPlugin) {
    registerPlugin(accordion);
    registerPlugin(alert);
    registerPlugin(avatar);
    registerPlugin(badge);
    registerPlugin(button);
    registerPlugin(card);
    registerPlugin(checkbox);
    registerPlugin(collapsible);
    registerPlugin(dialog);
    registerPlugin(fieldset);
    registerPlugin(icon);
    registerPlugin(infoPage);
    registerPlugin(input);
    registerPlugin(label);
    registerPlugin(menu);
    registerPlugin(pagination);
    registerPlugin(popover);
    registerPlugin(progress);
    registerPlugin(radio);
    registerPlugin(range);
    registerPlugin(select);
    registerPlugin(separator);
    registerPlugin(sidebar);
    registerPlugin(skeleton);
    registerPlugin(spinner);
    registerPlugin(_switch);
    registerPlugin(table);
    registerPlugin(tabs);
    registerPlugin(tag);
    registerPlugin(textarea);
    registerPlugin(text);
    registerPlugin(tile);
    registerPlugin(toolbar);
    registerPlugin(tooltip);
  },
  setColorScheme,
};

export default Harmonia;
