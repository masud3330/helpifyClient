

const SinglePostCard = ({post}) => {
   
    const {Category,PaymentPayMethod,Price,UrgencyLevel,contactNumber ,description,email,image,location,title}=post
    return (
        <div >
          <div className="card md:card-side bg-base-100 shadow-sm sm:flex-col ">
  <figure>
    <img
      src={image}
      alt="image" className="md:w-92 sm:w-full" />
  </figure>
  <div className="card-body">
    <h2 className="card-title ">{title}</h2>
    <p className="font-semibold border-b-4 border-indigo-500">{description}</p>
    <div>
        <p>Email: {email}</p>
        <p>Category: {Category}</p>
        <p>contact Number: {contactNumber}</p>
        <p>Price: {Price}</p>
        <p>Payment Pay Method: {PaymentPayMethod}</p>
        <p>Urgency Level: {UrgencyLevel}</p>
        <p>location: {location}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Apply</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SinglePostCard;