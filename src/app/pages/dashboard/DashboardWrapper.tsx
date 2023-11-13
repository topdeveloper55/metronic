import {useIntl} from 'react-intl'
import {UsersTable} from '../../../app/modules/apps/user-management/users-list/table/UsersTable'
import {
  ListViewProvider,
  useListView,
} from '../../../app/modules/apps/user-management/users-list/core/ListViewProvider'
import {StatisticsWidget5} from '../../../_metronic/partials/widgets'
import {QueryRequestProvider} from '../../../app/modules/apps/user-management/users-list/core/QueryRequestProvider'
import {QueryResponseProvider} from '../../../app/modules/apps/user-management/users-list/core/QueryResponseProvider'
const DashboardPage = () => (
  <>
    <div className='d-flex flex-wrap flex-stack mb-6'>
      <h3 className='fw-bolder my-2'>
      </h3>

      <div className='d-flex flex-wrap my-2'>
        <div className='me-4'>
          <select
            name='status'
            data-control='select2'
            data-hide-search='true'
            className='form-select form-select-sm form-select-white w-125px'
            defaultValue='Active'
          >
            <option value='Active'>Today</option>
            <option value='Approved'>Yesterday</option>
            <option value='Declined'>This Week</option>
            <option value='In Progress'>This Month</option>
            <option value='In Progress'>Select Date</option>
          </select>
        </div>
      </div>
    </div>
    <div className='row g-5 g-xl-8'>
      <div className='col-xl-3'>
        <StatisticsWidget5
          className='card-xl-stretch mb-xl-8'
          svgIcon='chart-simple'
          color='white'
          iconColor='primary'
          title='500M$'
          description='SAP UI Progress'
        />
      </div>

      <div className='col-xl-3'>
        <StatisticsWidget5
          className='card-xl-stretch mb-xl-8'
          svgIcon='cheque'
          color='dark'
          iconColor='white'
          title='+3000'
          titleColor='white'
          description='New Customers'
          descriptionColor='white'
        />
      </div>

      <div className='col-xl-3'>
        <StatisticsWidget5
          className='card-xl-stretch mb-xl-8'
          svgIcon='briefcase'
          color='warning'
          iconColor='white'
          title='$50,000'
          titleColor='white'
          description='Milestone Reached'
          descriptionColor='white'
        />
      </div>

      <div className='col-xl-3'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='chart-pie-simple'
          color='info'
          iconColor='white'
          title='$50,000'
          titleColor='white'
          description='Milestone Reached'
          descriptionColor='white'
        />
      </div>
    </div>
    {/* end::Row */}
    <UsersTable />
  </>
)

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <QueryRequestProvider>
        <QueryResponseProvider>
          <ListViewProvider>
            <DashboardPage />
          </ListViewProvider>
        </QueryResponseProvider>
      </QueryRequestProvider>
    </>
  )
}

export {DashboardWrapper}
