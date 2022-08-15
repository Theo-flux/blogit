
export function Section({children, className}) {
  return (
    <section className={`${className}`}>
        {children}
    </section>
  )
}

export function Nav({children}) {
    return (
        <nav className="w-[95%] mx-auto py-3 md:py-2">
            {children}
        </nav>
    )
}

export function Div({children, className}) {
    return (
        <div className={`w-[100%] mx-auto max-w-5xl ${className}`}>
            {children}
        </div>
    )
}
