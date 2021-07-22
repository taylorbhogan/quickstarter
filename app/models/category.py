from .db import db

class Category(db.Model):
    __tablename__= "categories"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=True)

    projects = db.relationship("Project", back_populates='category')
    sub_categories = db.relationship('SubCategory', back_populates='category')

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            # "projects": [project.to_dict() for project in self.projects],
            # "sub_categories": [sub_category.to_dict() for sub_category in self.sub_categories]
        }

