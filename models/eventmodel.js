'use strict';

var socket = require( '../lib/socket');

exports.send = function() {
	
	var index = 0;

	setInterval( function() {
		if (index == eventsmock.length) index = 0;
		socket.send ( eventsmock[index] );
		index++;
	}, 1000 );
};

exports.get = function() {
	return eventsmock;
};

var eventsmock = [
{
    "event": {
        "event-header": {
            "event-id": "productevent", 
            "event-reference": "123", 
            "event-publisher": "fpi", 
            "event-publisher-stage": "P", 
            "event-bodyversion": "3.0", 
            "event-timestamp": "2015-08-13 10:14:04"
        }, 
        "event-body": {
            "event-info": {
                "customer": {
                    "customer-id": "01018010000", 
                    "customer-id-type": "ssn"
                }, 
                "initiator": {
                    "initiator-id": "01010010000", 
                    "initiator-id-type": "ssn", 
                    "initiator-role": "INTERNAL"
                }, 
                "product": {
                    "product-id": "EKSTRAPENSJON", 
                    "product-id-type": "WEB"
                }, 
                "event-type": "OFFER", 
                "signing-method": "BANK-ID", 
                "agreementnumber": "ABCD-1234", 
                "productdetails": {
                    "productdetail": {
                        "name": "Ekstrapensjon", 
                        "code": "EKSTRAPENSJON", 
                        "periodicsaving": "1000",
                        "onetimepayment": "0"
                    }
                }, 
                "fields": {
                    "field": []
                }
            }
        }
    }
},
{
    "event": {
        "event-header": {
            "event-id": "productevent", 
            "event-reference": "123", 
            "event-publisher": "fpi", 
            "event-publisher-stage": "P", 
            "event-bodyversion": "3.0", 
            "event-timestamp": "2015-08-13 10:15:04"
        }, 
        "event-body": {
            "event-info": {
                "customer": {
                    "customer-id": "01018010000", 
                    "customer-id-type": "ssn"
                }, 
                "initiator": {
                    "initiator-id": "01010010000", 
                    "initiator-id-type": "ssn", 
                    "initiator-role": "INTERNAL"
                }, 
                "product": {
                    "product-id": "EKSTRAPENSJON", 
                    "product-id-type": "WEB"
                }, 
                "event-type": "DEMAND", 
                "signing-method": "BANK-ID", 
                "agreementnumber": "ABCD-1234", 
                "productdetails": {
                    "productdetail": {
                        "name": "Ekstrapensjon", 
                        "code": "EKSTRAPENSJON", 
                        "periodicsaving": "1000",
                        "onetimepayment": "0"
                    }
                }, 
                "fields": {
                    "field": []
                }
            }
        }
    }
},
{
    "event": {
        "event-header": {
            "event-id": "productevent", 
            "event-reference": "123", 
            "event-publisher": "fpi", 
            "event-publisher-stage": "P", 
            "event-bodyversion": "3.0", 
            "event-timestamp": "2015-08-13 10:16:04"
        }, 
        "event-body": {
            "event-info": {
                "customer": {
                    "customer-id": "01018010000", 
                    "customer-id-type": "ssn"
                }, 
                "initiator": {
                    "initiator-id": "01010010000", 
                    "initiator-id-type": "ssn", 
                    "initiator-role": "INTERNAL"
                }, 
                "product": {
                    "product-id": "EKSTRAPENSJON", 
                    "product-id-type": "WEB"
                }, 
                "event-type": "ACCEPT", 
                "signing-method": "BANK-ID", 
                "agreementnumber": "ABCD-1234", 
                "productdetails": {
                    "productdetail": {
                        "name": "Ekstrapensjon", 
                        "code": "EKSTRAPENSJON", 
                        "periodicsaving": "1000",
                        "onetimepayment": "0"
                    }
                }, 
                "fields": {
                    "field": []
                }
            }
        }
    }
},


{
    "event": {
        "event-header": {
            "event-id": "productevent", 
            "event-reference": "123", 
            "event-publisher": "fpi", 
            "event-publisher-stage": "P", 
            "event-bodyversion": "3.0", 
            "event-timestamp": "2015-08-13 11:14:04"
        }, 
        "event-body": {
            "event-info": {
                "customer": {
                    "customer-id": "01018120000", 
                    "customer-id-type": "ssn"
                }, 
                "initiator": {
                    "initiator-id": "01010020000", 
                    "initiator-id-type": "ssn", 
                    "initiator-role": "INTERNAL"
                }, 
                "product": {
                    "product-id": "EKSTRAPENSJON", 
                    "product-id-type": "WEB"
                }, 
                "event-type": "OFFER", 
                "signing-method": "BANK-ID", 
                "agreementnumber": "ABCD-1234", 
                "productdetails": {
                    "productdetail": {
                        "name": "Ekstrapensjon", 
                        "code": "EKSTRAPENSJON", 
                        "periodicsaving": "1500",
                        "onetimepayment": "1000"
                    }
                }, 
                "fields": {
                    "field": []
                }
            }
        }
    }
},
{
    "event": {
        "event-header": {
            "event-id": "productevent", 
            "event-reference": "123", 
            "event-publisher": "fpi", 
            "event-publisher-stage": "P", 
            "event-bodyversion": "3.0", 
            "event-timestamp": "2015-08-13 11:15:04"
        }, 
        "event-body": {
            "event-info": {
                "customer": {
                    "customer-id": "01018120000", 
                    "customer-id-type": "ssn"
                }, 
                "initiator": {
                    "initiator-id": "01010020000", 
                    "initiator-id-type": "ssn", 
                    "initiator-role": "INTERNAL"
                }, 
                "product": {
                    "product-id": "EKSTRAPENSJON", 
                    "product-id-type": "WEB"
                }, 
                "event-type": "DEMAND", 
                "signing-method": "BANK-ID", 
                "agreementnumber": "ABCD-1234", 
                "productdetails": {
                    "productdetail": {
                        "name": "Ekstrapensjon", 
                        "code": "EKSTRAPENSJON", 
                        "periodicsaving": "1500",
                        "onetimepayment": "1000"
                    }
                }, 
                "fields": {
                    "field": []
                }
            }
        }
    }
},
{
    "event": {
        "event-header": {
            "event-id": "productevent", 
            "event-reference": "123", 
            "event-publisher": "fpi", 
            "event-publisher-stage": "P", 
            "event-bodyversion": "3.0", 
            "event-timestamp": "2015-08-13 11:16:04"
        }, 
        "event-body": {
            "event-info": {
                "customer": {
                    "customer-id": "01018120000", 
                    "customer-id-type": "ssn"
                }, 
                "initiator": {
                    "initiator-id": "01010020000", 
                    "initiator-id-type": "ssn", 
                    "initiator-role": "INTERNAL"
                }, 
                "product": {
                    "product-id": "EKSTRAPENSJON", 
                    "product-id-type": "WEB"
                }, 
                "event-type": "ACCEPT", 
                "signing-method": "BANK-ID", 
                "agreementnumber": "ABCD-1234", 
                "productdetails": {
                    "productdetail": {
                        "name": "Ekstrapensjon", 
                        "code": "EKSTRAPENSJON", 
                        "periodicsaving": "1500",
                        "onetimepayment": "1000"
                    }
                }, 
                "fields": {
                    "field": []
                }
            }
        }
    }
}
];
