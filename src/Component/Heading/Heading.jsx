

const Heading = ({heading, subHeading}) => {
    return (
        <div className="flex justify-center mt-4">
          <div>
             <p className="text-4xl font-bold ">---{heading}---</p>
            <p className="text-2xl font-bold ">{subHeading}</p>
          </div>
        </div>
    );
};

export default Heading;