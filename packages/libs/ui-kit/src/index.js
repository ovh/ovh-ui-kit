// Styles
import './less/oui.less';

// Components
import ActionMenu from '@ovh/ui-kit.action-menu';
import angular from 'angular';
import Autocomplete from '@ovh/ui-kit.autocomplete';
import BackButton from '@ovh/ui-kit.back-button';
import Button from '@ovh/ui-kit.button';
import Calendar from '@ovh/ui-kit.calendar';
import Checkbox from '@ovh/ui-kit.checkbox';
import Chips from '@ovh/ui-kit.chips';
import Clipboard from '@ovh/ui-kit.clipboard';
import Collapsible from '@ovh/ui-kit.collapsible';
import Criteria from '@ovh/ui-kit.criteria';
import Datagrid from '@ovh/ui-kit.datagrid';
import Dropdown from '@ovh/ui-kit.dropdown';
import DualList from '@ovh/ui-kit.dual-list';
import Field from '@ovh/ui-kit.field';
import File from '@ovh/ui-kit.file';
import FormActions from '@ovh/ui-kit.form-actions';
import GuideMenu from '@ovh/ui-kit.guide-menu';
import Header from '@ovh/ui-kit.header';
import InlineAdder from '@ovh/ui-kit.inline-adder';
import Message from '@ovh/ui-kit.message';
import Modal from '@ovh/ui-kit.modal';
import Navbar from '@ovh/ui-kit.navbar';
import Numeric from '@ovh/ui-kit.numeric';
import Pagination from '@ovh/ui-kit.pagination';
import Password from '@ovh/ui-kit.password';
import Popover from '@ovh/ui-kit.popover';
import Progress from '@ovh/ui-kit.progress';
import Radio from '@ovh/ui-kit.radio';
import Search from '@ovh/ui-kit.search';
import Select from '@ovh/ui-kit.select';
import SelectPicker from '@ovh/ui-kit.select-picker';
import Skeleton from '@ovh/ui-kit.skeleton';
import Slideshow from '@ovh/ui-kit.slideshow';
import Spinner from '@ovh/ui-kit.spinner';
import Stepper from '@ovh/ui-kit.stepper';
import Switch from '@ovh/ui-kit.switch';
import Tabs from '@ovh/ui-kit.tabs';
import Textarea from '@ovh/ui-kit.textarea';
import Tile from '@ovh/ui-kit.tile';
import Timepicker from '@ovh/ui-kit.timepicker';
import Tooltip from '@ovh/ui-kit.tooltip';

const moduleName = 'oui';

angular
  .module(moduleName, [
    ActionMenu,
    Autocomplete,
    BackButton,
    Button,
    Calendar,
    Checkbox,
    Chips,
    Clipboard,
    Collapsible,
    Criteria,
    Datagrid,
    Dropdown,
    DualList,
    Field,
    File,
    FormActions,
    GuideMenu,
    Header,
    InlineAdder,
    Message,
    Modal,
    Navbar,
    Numeric,
    Pagination,
    Password,
    Popover,
    Progress,
    Radio,
    Search,
    Select,
    SelectPicker,
    Skeleton,
    Slideshow,
    Spinner,
    Stepper,
    Switch,
    Tabs,
    Textarea,
    Tile,
    Timepicker,
    Tooltip,
  ]);

export default moduleName;
