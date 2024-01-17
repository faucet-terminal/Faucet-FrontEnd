
type Props = {
    primaryColor ?: string,
    secondaryColor ?: string,
}

export function VerifiedLogo({ primaryColor, secondaryColor} : Props) {

    const PrimaryStyle = {
        backgroundColor : '#3b82f6', // primaryColor
    }

    const secondaryStyle = {
        borderColor: '#12b9f5' // secondaryColor
    }

    return <div className="w-5 h-5 bg-blue-500 rounded-full" style={ PrimaryStyle}>
        <p className="w-2 h-4 border-r-4 border-b-4 rotate-[45deg] translate-x-2" style={secondaryStyle}></p>
    </div>
}