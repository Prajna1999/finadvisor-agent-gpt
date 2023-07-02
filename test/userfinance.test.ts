import { expect } from 'chai';
import { describe, it } from 'mocha';
import axios from 'axios';



describe('Income API', () => {
    it('should return income data for a valid ID', async () => {
        const response = await axios.get('http://localhost:5000/api/incomes/', { params: { id: '7fafbc03-bef4-4cb5-98aa-71248e44edec' } });
        const { data } = response;
        expect(response.status).to.equal(200);

        expect(data[0]).to.have.property('name').that.equals('Robyn Vecard');
        expect(data[0]).to.have.property('Incomes');
        expect(data[0]["Incomes"][0]).to.have.property('name');
        expect(data[0]["Incomes"][0]).to.have.property('value');
        expect(data[0]["Incomes"][0]).to.have.property('dateOfIncome');
        expect(data[0]["Incomes"][0]).to.have.property('incomeType');
        expect(data[0]["Incomes"][0]).to.have.property('modeOfIncome');
    });
});

describe('Subscriptions API', () => {
    it('should return subscriptions data for a valid ID', async () => {
        const response = await axios.get('http://localhost:5000/api/subscriptions/', { params: { id: '7fafbc03-bef4-4cb5-98aa-71248e44edec' } });
        const { data } = response;
        expect(response.status).to.equal(200);

        expect(data[0]).to.have.property('name').that.equals('Robyn Vecard');
        expect(data[0]).to.have.property('Subscriptions');
        expect(data[0]["Subscriptions"][0]).to.have.property('name');
        expect(data[0]["Subscriptions"][0]).to.have.property('value');
        expect(data[0]["Subscriptions"][0]).to.have.property('subType');
    });
});

describe('Expenses API', () => {
    it('should return expenses for a valid ID', async () => {
        const response = await axios.get('http://localhost:5000/api/expenses/', { params: { id: '7fafbc03-bef4-4cb5-98aa-71248e44edec' } });
        const { data } = response;
        expect(response.status).to.equal(200);

        expect(data[0]).to.have.property('name').that.equals('Robyn Vecard');
        expect(data[0]).to.have.property('expenses');
        expect(data[0]["expenses"][0]).to.have.property('name');
        expect(data[0]["expenses"][0]).to.have.property('value');
        expect(data[0]["expenses"][0]).to.have.property('dateOfExpense');
        expect(data[0]["expenses"][0]).to.have.property('modeOfExpense');
        expect(data[0]["expenses"][0]).to.have.property('category');
    });
});

describe('Users API', () => {
    it('should return expenses, subscriptions and income data for a valid ID', async () => {
        const response = await axios.get('http://localhost:5000/api/users/', { params: { id: '7fafbc03-bef4-4cb5-98aa-71248e44edec' } });
        const { data } = response;
        expect(response.status).to.equal(200);

        expect(data[0]).to.have.property('name').that.equals('Robyn Vecard');
        expect(data[0]).to.have.property('expenses');
        expect(data[0]["expenses"][0]).to.have.property('name');
        expect(data[0]["Subscriptions"][0]).to.have.property('name');
        expect(data[0]["Incomes"][0]).to.have.property('name');

    });
});
