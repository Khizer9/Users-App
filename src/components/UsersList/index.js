import UsersList from "./UsersList"
import { getUsersData } from "../../store/actions/users.action"

import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

function mapStateToProps(state) {
  return { usersData: state.users.users, loading: state.users.loading }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getUsersData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
