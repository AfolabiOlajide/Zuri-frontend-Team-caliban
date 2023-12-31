import BadgeItems from './badge-item';
import { CaretRight } from './icons';
import { SectionProps } from '@modules/marketplace/types/filter-types';

const FilterSection = ({ data, children, tag, sectionTitle, action = () => {}, ...props }: SectionProps) => {
  return (
    <article className="mt-5" {...props}>
      <h4 className="text-base text-gray-600 my-4">{sectionTitle}</h4>
      <div className="w-full inline-flex gap-4 flex-wrap">
        <BadgeItems data={data} tag={tag} />
        {children}
        {Array.isArray(data) && data.length > 9 ? (
          <button className="text-brand-green-primary ml-auto flex items-center text-sm" onClick={action}>
            <span>See more</span> <CaretRight className="w-4 h-4" />
          </button>
        ) : null}
      </div>
    </article>
  );
};

export default FilterSection;
