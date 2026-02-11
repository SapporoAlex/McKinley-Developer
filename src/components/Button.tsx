import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Button.scss";

interface ButtonProps {
  text: string;
  buttonLink: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  buttonLink,
  external = false,
}) => {
  const ref = useRef<HTMLAnchorElement | HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // play once
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const className = `btn ${visible ? "is-visible" : ""}`;

  // Hash link
  if (buttonLink.startsWith("#")) {
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} href={buttonLink} className={className}>
        {text}
      </a>
    );
  }

  // External
  if (external) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {text}
      </a>
    );
  }

  // Router link
  return (
    <Link
      to={buttonLink}
      ref={ref as React.RefObject<HTMLAnchorElement>}
      className={className}
    >
      {text}
    </Link>
  );
};

export default Button;
