import Time "mo:core/Time";
import List "mo:core/List";
import Runtime "mo:core/Runtime";

actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    businessType : Text;
    message : Text;
    timestamp : Int;
  };

  let inquiriesList = List.empty<Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, businessType : Text, message : Text) : async () {
    if (name == "" or phone == "" or businessType == "" or message == "") {
      Runtime.trap("All fields must be filled out");
    };

    let newInquiry : Inquiry = {
      name;
      phone;
      businessType;
      message;
      timestamp = Time.now();
    };

    inquiriesList.add(newInquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiriesList.toArray();
  };
};
