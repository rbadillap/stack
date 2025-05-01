export const Main = ({ ...props }: React.ComponentProps<"main">) => {
  return (
    <main
      {...props}
    >
      <div className="flex-1 pt-16">
        {props.children}
      </div>
    </main>
  )
}