import { Button } from "antd";

type IconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;
export const DButton = (
  action: () => any,
  text: string,
  icon?: JSX.Element
) => {
  return (
    <Button
      style={{
        borderRadius: 50,
        backgroundColor: "black",
        height: "40px",
        fontWeight: 500,
        fontFamily: "'Inter', sans-serif",
        color: "#0ff4e9",
        border: "2px solid #0ff4e9",
        alignItems: "center",
        display: "flex",
        boxShadow: "0 0 5px #0ff4e9,inset 0 0 5px #0ff4e9",
      }}
      onMouseUp={() => {
        action();
      }}
    >
      {text}
      {icon}
    </Button>
  );
};
