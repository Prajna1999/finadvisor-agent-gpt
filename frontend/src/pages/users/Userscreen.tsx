// UserScreen.js

import React, { Key, useEffect, useState } from "react";
import axios from 'axios';


function UserScreen() {
    const [user, setUser]: any = useState(null);
    const [text, setText] = useState('');
    const [aiResponse, setAIResponse] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('/api/v1/users?' + new URLSearchParams({
                    "id": "7fafbc03-bef4-4cb5-98aa-71248e44edec"
                }));
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.error('Failed to fetch user: ', error);
            }
        };
        fetchUser();
    }, []);

    const handleChange = (e: any) => {
        setText(e.target.value);
    }

    const handleClick = () => {
        console.log(text);
    }

    const filterAIRepsonse = (response: any) => {
        if (response.includes("json") || response.includes("JSON") || response.includes("Json") || response.includes("?")) {
            response.replaceAll("\/json\/gi", "");
            response.replaceAll("?", "");
        }

        return response;
    }

    async function getGenerativeText(userPrompt: string): Promise<any> {
        try {
            let prompt: {
                data: string | undefined,
                userPrompt: string | undefined,

            } = {
                data: "",
                userPrompt: text
            }
            userPrompt = userPrompt.toLowerCase();

            if (userPrompt.includes("expense")) {
                prompt = {
                    data: JSON.stringify(user[0].expenses),
                    userPrompt: text
                }
            } else if (userPrompt.includes("income")) {
                prompt = {
                    data: JSON.stringify(user[0].Incomes),
                    userPrompt: text
                }
            } else if (userPrompt.includes("subscription")) {
                prompt = {
                    data: JSON.stringify(user[0].Subscriptions),
                    userPrompt: text
                }
            }

            const res = await axios.post('/api/v1/completions', prompt)


            // if (!res.ok) {
            //     throw new Error('Network response was not ok');
            // }
            const data = await res.data;
            const filteredData = filterAIRepsonse(data["choices"][0].text);
            setAIResponse(filteredData);
            console.log(data)
            setText('');


        } catch (error) {
            console.error('Failed to fetch user: ', error);
        }
        // console.log(expenseRef.current?.innerText.trim());
    }

    const expenseTableGrid = (data: any) => {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Value</th>
                            <th>Date of Expense</th>
                            <th>Mode of Expense</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: any, index: any) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.value}</td>
                                <td>{item.dateofexpense}</td>
                                <td>{item.modeofexpense}</td>
                                <td>{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    const incomeTableGrid = (data: any) => {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Value</th>
                            <th>Date of Income</th>
                            <th>Type of Income</th>
                            <th>Mode of Income</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: any, index: any) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.value}</td>
                                <td>{item.dateofincome}</td>
                                <td>{item.incometype}</td>
                                <td>{item.modeofincome}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    const subscriptionTableGrid = (data: any) => {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Value</th>
                            <th>Subscription Period</th>
                            <th>Subscription Start Date</th>
                            <th>Subscription End Date</th>
                            <th>Subscription End Date</th>
                            <th>Subscription Next Payment Date</th>
                            <th>Want to Remind</th>
                            <th>Is Active Subscription</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: any, index: any) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.value}</td>
                                <td>{item.subtype}</td>
                                <td>{item.dateofstart ? item.dateofstart : "NIL"}</td>
                                <td>{item.dateofend ? item.dateofend : "NIL"}</td>
                                <td>{item.dateofnextpayment ? item.dateofnextpayment : "NIL"}</td>
                                <td>{item.reminder ? "Yes" : "No"}</td>
                                <td>{item.active ? "Yes" : "No"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }


    return (
        <div>
            <h1>Welcome, {user ? user[0]?.name : "Guest!"}</h1>
            <div>
                {user &&

                    (
                        <div>
                            <div>
                                <h2>
                                    Expenses
                                </h2>
                                <hr />
                                <div id='expenses'>
                                    {expenseTableGrid(user[0].expenses)}
                                </div>

                            </div>

                            <div>
                                <h2>
                                    Incomes
                                </h2>
                                <hr />
                                <div>
                                    {incomeTableGrid(user[0].Incomes)}

                                </div>
                            </div>

                            <div>
                                <h2>
                                    Subscriptions
                                </h2>
                                <hr />
                                <div>
                                    {subscriptionTableGrid(user[0].Subscriptions)}

                                </div>
                            </div>

                            <input type="text" value={text} onChange={handleChange} />
                            <button onClick={() => getGenerativeText(text)}>Get Text</button>
                            <div>
                                {aiResponse && <b>{aiResponse}</b>}
                            </div>

                        </div>)
                }
            </div>
        </div>

    );
}

export default UserScreen;
