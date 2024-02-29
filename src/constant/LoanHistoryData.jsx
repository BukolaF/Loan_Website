
export const LoanHistoryData = () => {
   
    const historyDatas = [
        {
          id: '1',
          title: "instant loan",
          amount: "100,000",
          duration: "9 months",
          status: "PAID",
          application_date: "2021-01-11",
          application_id: "2678",
          disbursement_date:"2021-01-18"
        },
        {
          id: '2',
          title: "instant loan",
          amount: "400,000",
          duration: "9 months",
          status: "DECLINED",
          application_date: "2021-09-21",
          application_id: "1265",
          disbursement_date:"NULL"
        },
        {
          id: '3',
          title: "personal loan",
          amount: "900,000",
          duration: "6 months",
          status: "PAID",
          application_date: "2022-05-01",
          application_id: "3456",
          disbursement_date:"2022-05-08"
        },
        {
          id: '4',
          title: "personal loan",
          amount: "1,000,000",
          duration: "6 months",
          status: "PAID",
          application_date: "2022-10-08",
          application_id: "1123",
          disbursement_date:"2022-10-15"
        },
        {
          id: '5',
          title: "business loan",
          amount: "4,000,000",
          duration: "3 months",
          status: "ACTIVE",
          application_date: "2023-07-25",
          application_id: "4562",
          disbursement_date:"2023-07-31"
        },
        {
            id: '6',
            title: "instant loan",
            amount: "400,000",
            duration: "9 months",
            status: "DECLINED",
            application_date: "2020-01-01",
            application_id: "3142",
            disbursement_date:"NULL"
          },
          {
            id: '7',
            title: "instant loan",
            amount: "400,000",
            duration: "9 months",
            status: "ACTIVE",
            application_date: "2021-09-28",
            application_id: "1276",
            disbursement_date:"2021-09-28"
          },
          {
            id: '3',
            title: "personal loan",
            amount: "800,000",
            duration: "6 months",
            status: "PAID",
            application_date: "2023-04-01",
            application_id: "3241",
            disbursement_date:"2022-05-08"
          },
          {
            id: '4',
            title: "personal loan",
            amount: "1,000,000",
            duration: "6 months",
            status: "DECLINED",
            application_date: "2022-10-01",
            application_id: "1867",
            disbursement_date:"NULL"
          },
          {
            id: '10',
            title: "business loan",
            amount: "6,000,000",
            duration: "3 months",
            status: "DECLINED",
            application_date: "2023-09-18",
            application_id: "4634",
            disbursement_date:"NULL"
          }
      ]
  return (
    <>
            {historyDatas.map((data) => (
              <tr key={data.application_id}>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>{data.id}</td>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>{data.title}</td>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>{data.duration}</td>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>{data.amount}</td>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>{new Date(data.application_date).toLocaleDateString()}</td>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>#{data.application_id}</td>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>{data.disbursement_date}</td>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4'>{data.status}</td>
          </tr>
            )

            )}
    </>
  )
}
