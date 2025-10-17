import { useEffect, useState } from "react";
import "./Timeline.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGamepad,
  faListCheck,
  faSchool,
  faSuitcase,
  faFish,
  faVideo,
  faTimeline,
} from "@fortawesome/free-solid-svg-icons";

export interface TimelineLink {
  link: string;
  name: string;
}

export interface TimelineItemData {
  type?: string;
  selector?: string;
  date: string;
  tags?: string[];
  title: string;
  description: string;
  imgPath?: string;
  links?: TimelineLink[];
}

const iconMap: Record<string, any> = {
  faSchool: faSchool,
  faSuitcase: faSuitcase,
  faListCheck: faListCheck,
  faGamepad: faGamepad,
  faFish: faFish,
  faVideo: faVideo,
  faTimeline: faTimeline,
};

export function Container({
  id,
  key,
  children,
  style,
  className,
  hidden,
}: {
  id?: string | number;
  key?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  hidden?: boolean;
}) {
  return (
    <div
      id={String(id)}
      key={key}
      className={`Container ${className}`}
      style={style}
      hidden={hidden}
    >
      {children}
    </div>
  );
}

export function TimelineTags({ tags }: { tags?: string[] }): JSX.Element {
  if (tags) {
    return (
      <div style={{ display: "flex", flexDirection: "row", gap: "0.5vmin" }}>
        {tags.map((item, index) => {
          return (
            <Container
              key={`tag ${index}`}
              style={{
                width: "fit-content",
                borderRadius: "10vmin",
                padding: "0.5vmin 1vmin",
              }}
            >
              <h2 className="TimelineTag">{item}</h2>
            </Container>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
}

export function TimelineLinks({
  links,
}: {
  links?: TimelineLink[];
}): JSX.Element {
  if (links) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "0.5vmin",
          pointerEvents: "auto",
        }}
      >
        {links.map((item, index) => {
          return (
            <a
              key={index}
              className="TimelineLink"
              href={item.link}
              style={{
                width: "fit-content",
                borderRadius: "10vmin",
                padding: "0.5vmin 1vmin",
              }}
              target="_/"
            >
              {item.name}
            </a>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
}

export function TimelineItem({
  id,
  key,
  className,
  data,
  hidden,
  title,
  date,
  alignRight,
}: {
  id?: string | number;
  key?: string;
  className?: string;
  data?: TimelineItemData;
  hidden?: boolean;
  title?: string;
  date?: string;
  alignRight?: boolean;
}): JSX.Element {
  if (data) {
    if (hidden) {
      return <div className="TimelineItemEmpty"></div>;
    }
    return (
      <Container
        key={key}
        id={id}
        className={`TimelineItem ${className}`}
        style={{
          backgroundColor: "#FFF",
          flex: 1,
          gap: "1vmin",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
        hidden={hidden}
      >
        <TimelineTags tags={data.tags} />
        <p>{data.description}</p>
        <TimelineLinks links={data.links} />
      </Container>
    );
  } else {
    return (
      <div className="TimelineItemEmpty">
        <h2 style={{ textAlign: alignRight ? "right" : "left" }}>{title}</h2>
        <h3 style={{ textAlign: alignRight ? "right" : "left" }}>{date}</h3>
      </div>
    );
  }
}

export function TimelineSelector({
  icon,
  hide,
  setHide,
}: {
  icon?: string;
  hide: boolean;
  setHide: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  return (
    <div
      className="TimeLineSelector"
      onClick={() => {
        setHide(!hide);
      }}
    >
      <FontAwesomeIcon
        icon={icon ? iconMap[icon] : faSuitcase}
        style={{ fontSize: "5vw", margin: 0, textAlign: "center" }}
      />
    </div>
  );
}

export function TimelineItemContainer({
  item,
  index,
}: {
  item: TimelineItemData;
  index: number;
}) {
  const [hidden, setHidden] = useState<boolean>(true);
  const [animClass, setAnimClass] = useState<string>("");

  const isOpposite = item.type === "Opposite";

  const handleToggle = () => {
    if (hidden) {
      setAnimClass(isOpposite ? "FadeInRight" : "FadeInLeft");
      setHidden(false);
    } else {
      setAnimClass(isOpposite ? "FadeOutRight" : "FadeOutLeft");

      setTimeout(() => {
        setHidden(true);
      }, 600);
    }
  };

  return (
    <div key={index} className="TimelineItemContainer">
      {isOpposite || typeof item.type == null ? (
        <>
          <TimelineItem date={item.date} title={item.title} alignRight />
          <TimelineSelector
            icon={item.selector}
            hide={hidden}
            setHide={handleToggle}
          />
          <TimelineItem hidden={hidden} className={animClass} data={item} />
        </>
      ) : (
        <>
          <TimelineItem data={item} className={animClass} hidden={hidden} />
          <TimelineSelector
            icon={item.selector}
            hide={hidden}
            setHide={handleToggle}
          />
          <TimelineItem date={item.date} title={item.title} />
        </>
      )}
    </div>
  );
}

export function Timeline({
  data,
}: {
  data?: TimelineItemData[];
  children?: React.ReactNode;
}): JSX.Element {
  if (data) {
    return (
      <div className="Timeline">
        <div className="TimelineLine"></div>
        {data.map((item, index) => {
          return (
            <TimelineItemContainer key={index} item={item} index={index} />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="Timeline">
        <h1>YOU NO PUT NOTHING</h1>
      </div>
    );
  }
}
