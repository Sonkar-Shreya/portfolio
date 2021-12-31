/*
import app from '../index'
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth'

import {
	ref,
	child,
	get,
	set,
	update
} from "firebase/database";

import { paths } from './paths';
import { messages } from '../../constants';

const authentication = getAuth()
const db = app.database;
const dbRef = ref(db());

export const signIn = (email, password) => {
	return signInWithEmailAndPassword(authentication, email, password)
}

export const getUid = () => {
	const user = authentication.currentUser
	if (user) {
		return user.uid
	}
}

export const getData = (path) => {
	return get(child(dbRef, path))
}

export const registerStudent = (details) => {
	if (!details) {
		alert(messages.noData)
		return -1;
	}
	return createUserWithEmailAndPassword(authentication, details.email, details.password)
}

export const pushStudentDetails = (details, uid) => {
	const userDetails = {
		id: details.id,
		batch: details.batch,
		contact: details.contact,
		course: details.course,
		email: details.email,
		name: details.name,
		profilePic: details.profilePic,
		status: 'offline',
		isHosteler: details.isHosteler,
	}

	const reference = ref(db(), paths.student + uid);
	set(reference, userDetails)
		.catch(err => console.log('im guilty', err))
}

const separateIssues = (issues) => {
	const repeated = []
	const newIssues = []
	for (let i in issues) {
		const label = issues[i].label
		const value = issues[i].value
		label === value ? newIssues.push(label) : repeated.push(label)
	}

	return { repeated, newIssues }
}

export const raiseIssueStudent = (issues, success = () => { }) => {
	const { repeated, newIssues } = separateIssues(issues)
	const uid = getUid()

	// console.log('repeated', repeated)
	addNewIssues(newIssues, uid)
	addRepeatedIssues(repeated, uid)
	success()
}

const getNewIssues = (issues) => {
	// console.log('issues', issues)
	let obj = {}

	for (let i in issues) {
		obj[issues[i]] = 1;
	}

	// console.log('issues', issues)
	// console.log('obj', obj)

	return obj;
}

const addNewIssues = (issues, uid, globalIssue = true) => {
	const reference = ref(db(), paths.issues);
	const refStudent = ref(db(), paths.student + uid + paths.issue)
	const data = getNewIssues(issues)
	if (globalIssue) {
		update(reference, data).then(() => {
			// console.log('Issues done', data)
		})
	}
	update(refStudent, data).then(() => {
		// console.log('Student issues done', data)
	})
}

const addRepeatedIssues = (issues, uid) => {
	const reference = ref(db(), paths.issues);
	const refStudent = ref(db(), paths.student + uid + paths.issue)

	getData(paths.issues)
		.then(response => {
			const val = response.val()
			let newObj = {}
			for (let i in val) {
				for (let j in issues) {
					// console.log('issues', i, issues[j])
					const areSame = i === issues[j]
					if (areSame) newObj[i] = parseInt(val[i]) + 1
				}
			}
			// console.log('obj', newObj)

			update(reference, newObj).then(() => {
				// console.log('previous done', newObj)
			})
		})

	getData(paths.student + uid + paths.issue)
		.then(response => {
			const val = response.val()

			if (val) {
				const newIssues = []
				const repeatedIssues = []
				for (let i in issues) {
					const issueKey = issues[i]
					if (val.hasOwnProperty(issueKey)) {
						repeatedIssues.push(issueKey)
					} else {
						newIssues.push(issueKey)
					}
				}

				if (newIssues.length > 0)
					addNewIssues(newIssues, uid, false)

				if (repeatedIssues.length > 0) {
					let newObj = {}
					// console.log('val--', val)
					// console.log('repeated--', repeatedIssues)
					for (let i in repeatedIssues) {
						for (let j in val) {
							// console.log('i', repeatedIssues[i], 'j', j)
							const condition = repeatedIssues[i] === j;
							if (condition) {
								newObj[j] = parseInt(val[j]) + 1;
							}
						}
					}

					// console.log('new obj student', newObj)
					update(refStudent, newObj).then(() => {
						// console.log('updated student', newObj)
					})
				}

			} else {
				addNewIssues(issues, uid, false)
			}
		})
}
*/
