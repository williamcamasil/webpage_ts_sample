import { sumValues, multValues } from '../../../util/mathValues';
import { formatPrice } from '../../../util/formatters';

const ExUtil = () => {
  return (
    <div>
      <p>{sumValues(5, 3)}</p>
      <p>{multValues(2, 7)}</p>
      <p>{formatPrice(230.453)}</p>
    </div>
  );
};

export default ExUtil;
