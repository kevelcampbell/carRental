from datetime import datetime
from mongoengine import *
import mongoengine.fields

class Vehicle(mongoengine.EmbeddedDocument):
    meta={'collection':'vehicle'}
    vehiche_id = mongoengine.StringField()
    photos = mongoengine.FileField()
    model = mongoengine.StringField()
    make = mongoengine.StringField()
    year = mongoengine.StringField()
    owner = mongoengine.ListField()
    owner_id = mongoengine.ListField()
    transmission_type = mongoengine.StringField()
    Description = mongoengine.StringField()
    Price = mongoengine.DecimalField()

class location(mongoengine.EmbeddedDocument):
    lot_num = mongoengine.IntField()
    Street_name = mongoengine.StringField()
    Community = mongoengine.StringField()
    City = mongoengine.StringField()
    Parish = mongoengine.StringField()

class Person(mongoengine.Document):
    meta={'collection':'person'}
    pid = mongoengine.StringField()
    photos = mongoengine.FileField()
    name = mongoengine.StringField()
    age = mongoengine.StringField()
    dob = mongoengine.DateTimeField() 
    Description = mongoengine.StringField()
    location = mongoengine.EmbeddedDocumentField(location)
    email_address = mongoengine.ListField(EmailField(), default = list)
    phone_number = mongoengine.ListField(StringField(), default = list)
    Language = mongoengine.ListField(StringField(), default = list)
    Number_of_rentals = mongoengine.IntField()
    Rating = mongoengine.DecimalField()
    vehicles_owned = mongoengine.ListField(LazyReferenceField(), default = list)