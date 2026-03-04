import Time "mo:core/Time";
import List "mo:core/List";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type Inquiry = {
    name : Text;
    phone : Text;
    businessType : Text;
    message : Text;
    timestamp : Int;
  };

  let inquiriesList = List.empty<Inquiry>();

  public shared func submitInquiry(name : Text, phone : Text, businessType : Text, message : Text) : async () {
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
