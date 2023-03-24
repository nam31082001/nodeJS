const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose')
const Course = require('../models/course')


class SiteController {
    index(req, res, next) {
        Course.find({})
            .then(todos => {
                res.render('home', { todos: mutipleMongooseToObject(todos) })
            })
            .catch(next)
    }
    stor(req, res, next) {

        const course = new Course(req.body)
        course.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }
    delete(rep, res, next) {
        Course.deleteOne({ _id: rep.params.id })
            .then(() => res.redirect('/'))
            .catch(next)
    }
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(todo => res.render('edit',
                { todo: mongooseToObject(todo) }
            ))
            .catch(next)
    }
}
module.exports = new SiteController()