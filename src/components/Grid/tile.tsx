import clsx from "clsx";

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string | number;
    currencyCode: string;
    position?: "bottom" | "center";
  };
} & React.ComponentProps<"img">) {
  return (
    <div
      className={clsx(
        "group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black",
        {
          relative: label,
          "border-2 border-blue-600": active,
          "border-neutral-200 dark:border-neutral-800": !active,
        }
      )}
    >
      {props.src ? (
        <div className="flex">
          <img
            className={clsx("relative h-full w-full object-contain", {
              "transition duration-300 ease-in-out group-hover:scale-105":
                isInteractive,
            })}
            {...props}
          />
        </div>
      ) : null}
    </div>
  );
}
