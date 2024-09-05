"use client"
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { data } from '@/constants/chartData';


const BudgetPage = ({ params }: { params: { CommodityId: string } }) => {
  return (
    <div className="mx-12 flex flex-col justify-center h-[calc(100vh-60px)] w-full gap-8">
      <h2 className='text-2xl my-6 font-semibold'>Visualized Data for price history of {params.CommodityId} :</h2>
      <ResponsiveContainer width="100%" height="70%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke="rgb(220 38 38)" fill="rgb(239 68 68)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BudgetPage;

