/* eslint-disable no-undef */
const { User } = require('../../src/app/models')
const bcrypt = require('bcryptjs')
const truncate = require('../utils/truncate')

describe('User', () => {
	beforeEach(async () => {
		await truncate()
	})

	it('should encrypt user password', async () => {
		const user = await User.create({
			name: 'Francisco',
			email: 'francisco@email.com',
			password: '123456',
		})

		//const hash = await bcrypt.hash('123456', 8)
		const compareHash = await bcrypt.compare('123456', user.password_hash)
		expect(compareHash).toBe(true)
	})
})
