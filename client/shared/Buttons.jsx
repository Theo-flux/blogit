
export function ConnectButton() {
  return (
    <div className="cursor-pointer bg-blue-500 text-white text-sm font-medium rounded-full py-2 px-4">
        connect wallet
    </div>
  )
}


export function Button({className, text, ...restProps}) {
  return (
    <button {...restProps}  className={`cursor-pointer bg-blue-500 text-white text-sm font-medium rounded-full py-2 px-4 ${className}`}>
        {text}
    </button>
  )
}