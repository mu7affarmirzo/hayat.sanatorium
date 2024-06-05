import CustomizedAccordions from 'components/CustomizedAccordions';
import ExpancedSearchOptions from 'views/dispatching/components/ExpandedOptionsSearch';

export const AdvencedSearchOptionDispatch = () => {
  return (
    <CustomizedAccordions
      title="Расширенные параметры поиска"
      childrenStyle={{
        background: '#F5F5F5',
        display: 'flex',
        padding: '10px',
      }}
      topBoxStyle={{ background: '#F5F5F5', marginTop: '10px' }}>
      <ExpancedSearchOptions />
    </CustomizedAccordions>
  );
};
