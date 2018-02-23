//
//  ProfileViewController.swift
//  HotShot
//
//  Created by Emmanuel Feygelson on 2/20/18.
//  Copyright © 2018 Karan Cheema. All rights reserved.
//

import UIKit
import FirebaseAuth
import Firebase

class ProfileViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        
        if let currentUser = Auth.auth().currentUser  {
            // User is signed in.
            
            usernameLabel.text = currentUser.displayName
            // ...
        }

        // Do any additional setup after loading the view.
        
    }
    
    @IBAction func logOutButton(_ sender: Any) {
        do {
            try Auth.auth().signOut()
//            performSegue(withIdentifier: "goLogin", sender: nil)
        } catch {
           print(error)
        }
    }
    
 
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    @IBOutlet weak var usernameLabel: UILabel!
    

 

}
