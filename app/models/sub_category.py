from .db import db

class SubCategory(db.Model):
    __tablename__= "sub_categories"

    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(50), nullable=True)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=True)

    category = db.relationship('Category', back_populates='sub_categories')
    projects = db.relationship('Project', back_populates='sub_category')


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            'category_id': self.category_id,
            # 'category': self.category.to_dict(),
            # "projects": [project.to_dict() for project in self.projects]
        }

