export interface BarsProps {
  color: string;
  className?: string;
  containerClassName?: string;
  heights: (string | number)[];
  barsRef?: React.MutableRefObject<(HTMLDivElement | null)[]>;
}
