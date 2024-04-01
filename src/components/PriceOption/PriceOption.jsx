import PriceOptionn from "../PriceOptionn/PriceOptionn";

const PriceOption = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "features": [
                "Access to gym facilities",
                "Standard workout equipment",
                "Limited gym hours",
                "Access to locker room"
            ],
            "price": 30.00
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "features": [
                "Access to gym facilities",
                "Full range of workout equipment",
                "Extended gym hours",
                "Group fitness classes",
                "Access to locker room"
            ],
            "price": 50.00
        },
        {
            "id": 3,
            "name": "Platinum Membership",
            "features": [
                "Access to gym facilities",
                "Full range of workout equipment",
                "24/7 gym access",
                "Personal training sessions",
                "Access to sauna and spa",
                "Access to locker room",
                "Towel service"
            ],
            "price": 80.00
        }
    ];
    return (
        <div className="m-10">
            <h2 className='text-5xl text-center mb-5'>best price in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option =><PriceOptionn key={option.id} option={option}></PriceOptionn> )
            }
            </div>
        </div>
    );
};

export default PriceOption;