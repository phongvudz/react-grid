import ManageColumn from './ManageColumn'
import ManageColumnRecord from './ManageColumnRecord'
import ManageFilter from './ManageFilter'
import ManagePathTag from './ManagePathTag'
import ManageSort from './ManageSort'


const Toolbar = () => {
  return (
    <div className="px-3.5 py-1.5 h-14 flex items-center justify-between bg-gray-400">
      <div className='flex items-center divide-x h-full'>
      <div className='pr-3 h-full'>
        <div className='flex border bg-gray-700 px-3.5 rounded items-center gap-3 h-full divide-x'>
          <p className='text-white'>view section</p>
          <div className='flex items-center gap-3 pl-3'>
              <ManageColumn />
              <ManageFilter />
              <ManageSort />
              <ManagePathTag />
          </div>
        </div> 
      </div>
      <div></div>
      <ManageColumnRecord />
      <div></div>
      <div></div>
      <div></div>
      </div>
    </div>
  )
}

export default Toolbar