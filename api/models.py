from datetime import datetime
from bson.objectid import ObjectId
from mongoengine import Document, EmbeddedDocument
from mongoengine.fields import (
    DateTimeField, ReferenceField, StringField, ObjectIdField
    , FileField, DateField, DecimalField, IntField, ListField, 
    EmailField, LazyReferenceField, ImageField, EmbeddedDocumentListField
)


class uploadedImages(EmbeddedDocument):
    meta={'collection':'images'}
    photos = ImageField(thumbnail_size=(150, 150, True))


class Vehicle(Document):
    meta={'collection':'vehicle'}
    vehicle_id = ObjectIdField(primary_key=True,required=True, default=ObjectId)
    photos = EmbeddedDocumentListField(uploadedImages)
    model = StringField()
    make = StringField()
    year = DateField()
    owner_id = ObjectIdField()
    transmission_type = StringField()
    Description = StringField()
    Price = DecimalField(required=True)   

class Person(Document):
    meta={'collection':'person'}
    pid = ObjectIdField(primary_key=True,required=True, default=ObjectId)
    photo_id = FileField(collection_name='images')
    name = StringField()
    age = IntField()
    dob = DateField()
    member_since = DateTimeField(default=datetime.now) 
    Description = StringField()
    lot_num = IntField(required=True)
    Street_name = StringField(required=True)
    Community = StringField()
    City =  StringField(required=True)
    Parish =  StringField(required=True)
    email_address = ListField(EmailField())
    phone_number = ListField(StringField())
    Language = ListField(StringField())
    Number_of_rentals = IntField()
    Rating = DecimalField()
    vehicles_owned = ListField(LazyReferenceField(Vehicle), default=list)

class Rental(Document):
    meta={'collection':'rental'}
    rental_id = ObjectIdField(Primary_key=True,required=True,unique=True, default=ObjectId)
    start_date = DateField(required=True)
    end_date = DateField(required=True)
    owner_id = LazyReferenceField(Person,required=True)
    renter_id = LazyReferenceField(Person,required=True)
    vehicle_id = LazyReferenceField(Vehicle,required=True)
    lot_num = IntField(required=True)
    Street_name = StringField(required=True)
    Community = StringField(required=True)
    City = StringField(required=True)
    Parish = StringField(required=True)
    location_type = StringField(required=True)
    pickup_time = DateTimeField()
    dropoff_time = DateTimeField()
