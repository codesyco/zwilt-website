import Dropdown from "../../Utilities/Dropdown"

const ThirdBanner = () => {
  return (
    <div>
      <div className="py-32 px-5 flex flex-col gap-5">
        <div className="font-bold text-3xl">How we ensure you’re in good hands.</div>
        <div>With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.</div>
        <div>
          <Dropdown Step={1} Title="Resume Screening" Content="thorough check of resume"/>
          <Dropdown Step={2} Title="Video Interview" Content="thorough check of resume"/>
          <Dropdown Step={3} Title="Technical Evaluation" Content="thorough check of resume"/>
          <Dropdown Step={4} Title="Application Review" Content="thorough check of resume"/>
          <Dropdown Step={5} Title="Lets get to work" Content="thorough check of resume"/>
        </div>
      </div>
    </div>
  )
}

export default ThirdBanner
