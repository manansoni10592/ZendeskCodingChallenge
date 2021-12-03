import unittest
import dataAccess
import core.models.login
import core.models.request

class TestDataAccess(unittest.TestCase):
    def test_client(self):
        self.assertEqual(dataAccess.getClient(), {'status':200, 'error':'OK', 'client_id': 360002843712})

    def test_login(self):
        self.addTypeEqualityFunc(core.models.login.LoginData, lambda first, second, msg: first.status == second.status )
        self.assertEqual(dataAccess.getToken(360002843712), {'status':200 , 'error':'OK' ,'auth_token':'Test_Token'})

    def test_request(self):
        self.addTypeEqualityFunc(core.models.request.RequestData, lambda first, second, msg: first.status == second.status )
        self.assertNotEqual(dataAccess.getAllRequests('Test_Token'), {'status':200 , 'error':'OK' , 'requests':'Test_Requests'})

if __name__ == '__main__':
    unittest.main()
