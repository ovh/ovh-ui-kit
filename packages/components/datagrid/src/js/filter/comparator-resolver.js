import BasicComparators from "./basic";
import DateComparators from "./date";
import endsWith from "lodash/endsWith";
import negate from "lodash/negate";
import NumberComparators from "./number";
import StringComparators from "./string";

const comparators = {
    "boolean": BasicComparators,
    date: DateComparators,
    number: NumberComparators,
    options: BasicComparators,
    string: StringComparators
};

export default class ComparatorResolver {
    static resolveComparator (criterion, type) {
        const baseOperator = criterion.operator.replace(/Not$/, "");
        const negated = endsWith(criterion.operator, "Not");
        const comparator = comparators[type] ? comparators[type][baseOperator] : null;
        return comparator && negated ? negate(comparator) : comparator;
    }
}
