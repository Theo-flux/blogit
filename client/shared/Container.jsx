
export function Section({children, className}) {
  return (
    <section className={`${className}`}>
        {children}
    </section>
  )
}

export function Nav({children}) {
    return (
        <nav className="w-11/12 mx-auto max-w-9xl py-2">
            {children}
        </nav>
    )
}

export function Div({children}) {
    return (
        <div className="w-4/5 mx-auto max-5xl">
            {children}
        </div>
    )
}
