import Button from '@ovh/ui-kit.button';
import Field from '@ovh/ui-kit.field';
import Password from '@ovh/ui-kit.password';
import Modal from '@ovh/ui-kit.modal';

import './index.less';

const moduleName = 'modal-stories';

angular.module(moduleName, [Button, Field, Password, Modal]);

export default moduleName;
