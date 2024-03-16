import { PortfolioItemProps } from "@/types/portfolio-item-props";
import { WorkListProps } from "@/types/work-list-props";
import { WorkItemI } from "@/types/workItem";
import WorkItem from "./work-item";

function WorkList({ portfolioItems }: WorkListProps) {
  return (
    <ol>
      {portfolioItems.length > 0 &&
        portfolioItems.map((item: WorkItemI, index) => (
          <WorkItem key={item.id} item={item} index={index} />
        ))}
    </ol>
  );
}

export default WorkList;
