import { expect } from 'chai';
import { describe, it } from 'mocha';
import axios from 'axios';



describe('Income API', () => {
    it('should return income data for a valid ID', async () => {
        const response = await axios.get('http://localhost:5001/api/v1/incomes/', { params: { id: '7fafbc03-bef4-4cb5-98aa-71248e44edec' } });
        const { data } = response;
        expect(response.status).to.equal(200);

        expect(data[0]).to.have.property('name').that.equals('Robyn Vecard');
        expect(data[0]).to.have.property('Incomes');
        expect(data[0]["Incomes"][0]).to.have.property('name');
        expect(data[0]["Incomes"][0]).to.have.property('value');
        expect(data[0]["Incomes"][0]).to.have.property('dateofincome');
        expect(data[0]["Incomes"][0]).to.have.property('incometype');
        expect(data[0]["Incomes"][0]).to.have.property('modeofincome');
    }).timeout(10000);
});

describe('Subscriptions API', () => {
    it('should return subscriptions data for a valid ID', async () => {
        const response = await axios.get('http://localhost:5001/api/v1/subscriptions/', { params: { id: '7fafbc03-bef4-4cb5-98aa-71248e44edec' } });
        const { data } = response;
        expect(response.status).to.equal(200);

        expect(data[0]).to.have.property('name').that.equals('Robyn Vecard');
        expect(data[0]).to.have.property('Subscriptions');
        expect(data[0]["Subscriptions"][0]).to.have.property('name');
        expect(data[0]["Subscriptions"][0]).to.have.property('value');
        expect(data[0]["Subscriptions"][0]).to.have.property('subtype');
    }).timeout(10000);
});

describe('Expenses API', () => {
    it('should return expenses for a valid ID', async () => {
        const response = await axios.get('http://localhost:5001/api/v1/expenses/', { params: { id: '7fafbc03-bef4-4cb5-98aa-71248e44edec' } });
        const { data } = response;
        expect(response.status).to.equal(200);

        expect(data[0]).to.have.property('name').that.equals('Robyn Vecard');
        expect(data[0]).to.have.property('expenses');
        expect(data[0]["expenses"][0]).to.have.property('name');
        expect(data[0]["expenses"][0]).to.have.property('value');
        expect(data[0]["expenses"][0]).to.have.property('dateofexpense');
        expect(data[0]["expenses"][0]).to.have.property('modeofexpense');
        expect(data[0]["expenses"][0]).to.have.property('category');
    }).timeout(10000);
});

describe('Users API', () => {
    it('should return expenses, subscriptions and income data for a valid ID', async () => {
        const response = await axios.get('http://localhost:5001/api/v1/users/', { params: { id: '7fafbc03-bef4-4cb5-98aa-71248e44edec' } });
        const { data } = response;
        expect(response.status).to.equal(200);

        expect(data[0]).to.have.property('name').that.equals('Robyn Vecard');
        expect(data[0]).to.have.property('expenses');
        expect(data[0]["expenses"][0]).to.have.property('name');
        expect(data[0]["Subscriptions"][0]).to.have.property('name');
        expect(data[0]["Incomes"][0]).to.have.property('name');
    }).timeout(10000);
});

describe('Users Finance AI Response API', () => {
    it('should return response from AI backend', async () => {
        const response = await axios.post('http://localhost:5001/api/v1/chat/', { prompt: "Hi My user id is f9a39d19-23d2-4cc6-99ef-34e8ba2e11d2 and my name is Lorilyn Custard. What are my top 3 expenses and summarize them." });
        expect(response.status).to.equal(200);

    }).timeout(20000);
});

