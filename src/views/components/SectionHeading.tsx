import './SectionHeading.css';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className="section-heading" id={id}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
