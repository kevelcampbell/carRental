import React from 'react';
import Select from 'react-select';
import DatePicker from "react-datepicker";

const cyberSecurity = (props) => (
  <div>
    <button class="form-cotrol" type="button" onClick={() => this.setState({ category: 'select' })}>Back</button>
    <h1 className='text-center pt-2'>Cyber Security</h1>
    <br/>
    <form onSubmit={this.handleSubmit}>
    {this.state.cyberSecurityPage === 1 ?
      <div class="form-group text-center">
        <label for="networkIds">
          Does the network use an IDS?
        </label>
        <Select
          options={this.state.booleanOptions}
          name="booleanOptions"
          onChange={this.inputChangeHandler('networkIds')}/>
        <br/>
        {this.state.networkIds && (this.state.networkIds === 'yes') ?
          <div>
            <label for="networkIdsType">
              what type (network, host, protocol, or hybrid)?
            </label>
            <Select
              options={this.state.networkIdsTypeOptions}
              name="networkIdsTypeOptions"
              onChange={this.inputChangeHandler('networkIdsType')}/>
          </div> : null
        }
        <br/>
        <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
      </div> : null
      }
      {this.state.cyberSecurityPage === 2 ?
        <div class="form-group text-center">
          <label for="rogueDevice">
            Can a rogue device be connected to the network and be given an IP?
          </label>
          <Select
            options={this.state.booleanOptions}
            name="rogueDevice"
            onChange={this.inputChangeHandler('rogueDevice')}/>
            <br/>
            <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
            <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
        </div> : null
      }
      {this.state.cyberSecurityPage === 3 ?
        <div class="form-group text-center">
          <label for="emailFilter">
            Are email filters being used??
          </label>
          <Select
            options={this.state.booleanOptions}
            name="emailFilter"
            onChange={this.inputChangeHandler('emailFilter')}/>
          <br/>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
        </div> : null
      }
      {this.state.cyberSecurityPage === 4 ?
        <div class="form-group text-center">
          <label for="rogueDevice">
            Do you sensitize your staff on social engineering? <br/> Especially on how phishing works?
          </label>
          <Select
            options={this.state.booleanOptions}
            name="sensitizeStaff"
            onChange={this.inputChangeHandler('sensitizeStaff')}/>
          <br/>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
        </div> : null
      }
      {this.state.cyberSecurityPage === 5 ?
        <div class="form-group text-center">
          <label for="antivirus">
            Does the system (inclusing all devices) have an antivirus?
          </label>
          <Select
            options={this.state.booleanOptions}
            name="antivirus"
            onChange={this.inputChangeHandler('antivirus')}/>
          <br/>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
        </div> : null
      }
      {this.state.cyberSecurityPage === 6 ?
        <div class="form-group text-center">
          <label for="firewall">
            Does the system (every device) have an active firewall?
          </label>
          <Select
            options={this.state.booleanOptions}
            name="firewall"
            onChange={this.inputChangeHandler('firewall')}/>
          <br/>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
        </div> : null
      }
      {this.state.cyberSecurityPage === 7 ?
        <div class="form-group text-center">
          <label for="informationSecurityTeam">
            Does the company have an information security team to monitor and secure the company's information system?
          </label>
          <Select
            options={this.state.booleanOptions}
            name="informationSecurityTeam"
            onChange={this.inputChangeHandler('informationSecurityTeam')}/>
          <br/>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
        </div> : null
      }
      {this.state.cyberSecurityPage === 8 ?
        <div class="form-group text-center">
          <label for="systemBackup">
            Are critical systems backed up? 
          </label>
          <Select
            options={this.state.booleanOptions}
            name="systemBackup"
            onChange={this.inputChangeHandler('systemBackup')}/>
          <br/>
          {this.state.systemBackup && (this.state.systemBackup === 'yes') ?
            <div>
              <label for="systemBackupDetails">
                how often, where and how are they being stored?
              </label>
              <input type="text" class="form-control" 
                id="systemBackupDetails"
                name="systemBackupDetails"
                placeholder="(once per Week, cloud, cloud server)"
                value={this.state.systemBackupDetails}
                onChange={this.handleChange()}/>
            </div> : null
          }
          <br/>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
        </div> : null
      }
      {this.state.cyberSecurityPage === 9 ?
        <div class="form-group text-center">
          <label for="osPatch">
            Are OS Patches being installed?
          </label>
          <Select
            options={this.state.booleanOptions}
            name="osPatch"
            onChange={this.inputChangeHandler('osPatch')}/>
          <br/>
          {this.state.osPatch && (this.state.osPatch === 'yes') ?
          <div>
            <label for="osPatchFrequency">
              How often?  
            </label>
            <input type="text" class="form-control" 
              id="osPatchFrequency"
              name="osPatchFrequency"
              placeholder="(once per Week)"
              value={this.state.osPatchFrequency}
              onChange={this.handleChange()}/>
            <br/>
            <label for="lastPatch">
              When was the last patch installed?
            </label>
            <DatePicker
              className="form-control"
              selected={this.state.lastPatch}
              onChange={this.inputChangeHandler('lastPatch')}
              startDate={this.state.lastPatch}
            />
            </div> : null
          }
        <br/>
        <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
        <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
      </div> : null
      }
      {this.state.cyberSecurityPage === 10 ?
        <div class="form-group text-center">
          <label for="accessControls">
            Are access controls being used to protect critical and non-critical systems?
          </label>
          <Select
            options={this.state.booleanOptions}
            name="accessControls"
            onChange={this.inputChangeHandler('accessControls')}/>
          <br/>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
        </div> : null
      }
      {this.state.cyberSecurityPage === 11 ?
        <div class="form-group text-center">
          <label for="networkSegregated">
            Are different networks segregated from each other?
          </label>
          <Select
            options={this.state.booleanOptions}
            name="networkSegregated"
            onChange={this.inputChangeHandler('networkSegregated')}/>
          <br/>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
        </div> : null
      }
      {this.state.cyberSecurityPage === 12 ?
        <div class="form-group text-center">
          <label for="deviceEncrypt">
            Do you encrypt your devices or disks?
          </label>
          <Select
            options={this.state.booleanOptions}
            name="deviceEncrypt"
            onChange={this.inputChangeHandler('deviceEncrypt')}/>
          <br/>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
        </div> : null
      }
      {this.state.cyberSecurityPage === 13 ?
        <div class="form-group text-center">
          <label for="vpnTimeout">
            Does your VPN access time out? 
          </label>
          <Select
            options={this.state.booleanOptions}
            name="vpnTimeout"
            onChange={this.inputChangeHandler('vpnTimeout')}/>
          <br/>
          {this.state.vpnTimeout && (this.state.vpnTimeout === 'yes') ?
            <div>
              <label for="vpnTimeoutFrequency">
                How often?  
              </label>
              <input type="text" class="form-control" 
                id="vpnTimeoutFrequency"
                name="vpnTimeoutFrequency"
                placeholder="(5 mins, 10 mins)"
                value={this.state.vpnTimeoutFrequency}
                onChange={this.handleChange()}/>
            </div> : null
          }
          <br/>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
        </div> : null
      }
      {this.state.cyberSecurityPage === 14 ?
        <div class="form-group text-center">
          <label for="multiAuth">
            Is multi-factor authentication being used?
          </label>
          <Select
            options={this.state.booleanOptions}
            name="multiAuth"
            onChange={this.inputChangeHandler('multiAuth')}/>
          <br/>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
        </div> : null
      }
      {this.state.cyberSecurityPage === 15 ?
        <div class="form-group text-center">
          <label for="ips">
            Do all critical systems have an IPS?
          </label>
          <Select
            options={this.state.booleanOptions}
            name="ips"
            onChange={this.inputChangeHandler('ips')}/>
          <br/>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage + 1 })}>Next</button>
        </div> : null
      }
      {this.state.cyberSecurityPage === 16 ?
        <div class="form-group text-center">
          <label for="assetManagementUnit">
            Is there an asset management unit that oversees the acquisition and disposal of assets?
          </label>
          <Select
            options={this.state.booleanOptions}
            name="assetManagementUnit"
            onChange={this.inputChangeHandler('assetManagementUnit')}/>
          <br/>
          <button class="form-cotrol" type="button" onClick={() => this.setState({ cyberSecurityPage: this.state.cyberSecurityPage - 1 })}>Back</button>
          <input  class="form-cotrol" type="submit" value="Submit"/>
        </div> : null
      }
    </form>
  </div>
);
export default cyberSecurity;