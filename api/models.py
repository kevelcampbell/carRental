from datetime import datetime
from mongoengine import *
import mongoengine.fields

class Vehicle(mongoengine.Document):
    meta={'collection':'vehicle'}
    vehiche_id = mongoengine.StringField(required=True, unique=True)
    photos = mongoengine.FileField()
    model = mongoengine.StringField()
    make = mongoengine.StringField()
    year = mongoengine.StringField()
    owner = mongoengine.ListField(LazyReferenceField(Person))
    owner_id = mongoengine.ListField(LazyReferenceField(Person))
    transmission_type = mongoengine.StringField()
    Description = mongoengine.StringField()
    Price = mongoengine.DecimalField(required=True)

class Location(mongoengine.EmbeddedDocument):
    lot_num = mongoengine.IntField(required=True)
    Street_name = mongoengine.StringField(required=True)
    Community = mongoengine.StringField(required=True)
    City = mongoengine.StringField(required=True)
    Parish = mongoengine.StringField(required=True)

class Person(mongoengine.Document):
    meta={'collection':'person'}
    pid = mongoengine.StringField(required=True)
    photos = mongoengine.FileField()
    name = mongoengine.StringField()
    age = mongoengine.StringField()
    dob = mongoengine.DateTimeField()
    memeber_since = mongoengine.DateTimeField(default=datetime.now) 
    Description = mongoengine.StringField()
    location = mongoengine.EmbeddedDocumentField(Location)
    email_address = mongoengine.ListField(EmailField(), default=list)
    phone_number = mongoengine.ListField(StringField(), default=list)
    Language = mongoengine.ListField(StringField(), default=list)
    Number_of_rentals = mongoengine.IntField()
    Rating = mongoengine.DecimalField()
    vehicles_owned = mongoengine.ListField(LazyReferenceField(), default=list)

class Rental(mongoengine.Document):
    meta={'collection':'rental'}
    rental_id = mongoengine.ObjectIdField(required=True,unique=True)
    start_date = mongoengine.DateField(required=True)
    end_date = mongoengine.DateField(required=True)
    owner_id = mongoengine.LazyReferenceField(Person,required=True)
    renter_id = mongoengine.LazyReferenceField(Person,required=True)
    vehicle_id = mongoengine.LazyReferenceField(Vehicle,required=True)
    pickup_location = mongoengine.StringField(EmbeddedDocumentField(Location),required=True)
    dropoff_location = mongoengine.StringField(EmbeddedDocumentField(Location),required=True)
    pickup_time = mongoengine.DateTimeField()
    dropoff_time = mongoengine.DateTimeField()
