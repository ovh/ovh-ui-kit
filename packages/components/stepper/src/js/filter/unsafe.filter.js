export default ($sce) => {
  'ngInject';

  return $sce.trustAsHtml;
};
