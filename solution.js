//The below code is in c++ language by abhishek jaiswal

#include <bits/stdc++.h>
using namespace std;

#define debug(x) cout<<"["<<#x<<": "<<x<<"]"<<endl

#define int long long
#define ll long long
#define vi vector<int>
#define pb emplace_back
#define f(i, a, b) for(int i=a;i<b;i++)
#define fr(i, a, b) for(int i=a;i>=b;i--)



int32_t main() {

    int t = 1;

    while (t--) {
        int par[26];
        memset(par, -1, sizeof(par));

        int n;
        cin >> n;
        string v[n];
        f(i, 0, n) cin >> v[i];
      
        f(i, 0, n)
        {
            par[((int)v[i][2]) - 65] = (((int)v[i][0]) - 65);
           
        }
        string ans;

        f(i, 0, 26)
        {
            int f = 1;
            f(j, 0, 26)
            {
                if (par[j] == i)
                {
                    f = 0;
                    break;
                }
            }
            if (f)
            {
                if (par[i] != -1) {
                    ans += (char)(i + 65);
                    break;
                }
            }
        }
      
        char start = ans[0];
        int i = ((int)start - 65);
        while (i != -1)
        {
            ans += (char)((int)par[i] + 65);
            i = par[i];
        }
     
        reverse(ans.begin(), ans.end());
        ans.erase(ans.begin());
        cout << ans << endl;
    }
    return 0;
}