import PresaleList from './PresaleList'

const PresaleSection = ({ presales}) => {
    return (
        <div>
            <div className={"max-w-[1240px] pt-5 pr-3  mx-auto items-end flex flex-col"}>
                <h1 className="text-3xl text-cB">
                    Total: {presales.length}
                </h1>
            </div>
            <div>

                <PresaleList presales={presales} />
            </div>
        </div>
    )
}

export default PresaleSection
